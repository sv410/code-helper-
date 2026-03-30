import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, Video, MessageSquare, ChevronRight } from 'lucide-react';
import './MentorProfile.css';

const MentorProfile = ({ mentor, onBack, onMatch }) => {
  return (
    <motion.div 
      className="mentor-profile-page"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4, type: 'spring', damping: 25 }}
    >
      <div className="profile-hero" style={{ '--company-color': mentor.color }}>
        <button className="back-btn glass" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="hero-content">
          <motion.img 
            src={mentor.avatar} 
            alt={mentor.name} 
            className="hero-avatar"
            layoutId={`avatar-${mentor.id}`}
          />
          <h1 className="profile-name">{mentor.name}</h1>
          <p className="profile-role">{mentor.role} at <span className="highlight" style={{color: mentor.color}}>{mentor.company}</span></p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
              <div>
                <strong>{mentor.rating}</strong>
                <span>{mentor.reviews} reviews</span>
              </div>
            </div>
            <div className="stat-item divider"></div>
            <div className="stat-item">
              <Clock size={18} stroke="#8b5cf6" />
              <div>
                <strong>10+ yrs</strong>
                <span>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <section className="about-section">
          <h2>About Me</h2>
          <p className="about-text">
            I specialize in helping engineers crack FAANG interviews through master system design and frontend architecture. I've conducted over 200+ interviews at {mentor.company}. Let's get you that offer!
          </p>
        </section>

        <section className="expertise-section">
          <h2>Expertise</h2>
          <div className="skills-row profile-skills">
            {mentor.skills.map(skill => (
               <span key={skill} className="skill-tag large-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="services-section">
          <h2>Available Sessions</h2>
          <div className="service-card glass">
            <div className="service-icon"><Video size={20} /></div>
            <div className="service-info">
              <h3>1:1 Mentorship</h3>
              <p>Weekly 45-min video calls</p>
            </div>
            <ChevronRight size={20} color="var(--text-secondary)" />
          </div>
          <div className="service-card glass">
            <div className="service-icon"><MessageSquare size={20} /></div>
            <div className="service-info">
              <h3>Code Review</h3>
              <p>Async PR reviews & feedback</p>
            </div>
            <ChevronRight size={20} color="var(--text-secondary)" />
          </div>
        </section>
      </div>

      <div className="profile-actions glass-bottom">
        <div className="price">
           <span className="currency">$</span><span className="amount">120</span><span className="period">/mo</span>
        </div>
        <button className="btn-primary match-btn" onClick={onMatch}>
          Request Match
        </button>
      </div>
    </motion.div>
  );
};

export default MentorProfile;
