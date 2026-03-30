import { motion } from 'framer-motion';
import { Star, Briefcase, MapPin } from 'lucide-react';
import Logo from '../components/Logo';
import './Home.css';

const MENTORS = [
  {
    id: 1,
    name: 'Sarah Chen',
    company: 'Google',
    role: 'Senior Staff Engineer',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 4.9,
    reviews: 124,
    skills: ['React', 'System Design', 'AI'],
    color: '#ea4335' // Google Red
  },
  {
    id: 2,
    name: 'David Okafor',
    company: 'Microsoft',
    role: 'Principal Developer',
    avatar: 'https://i.pravatar.cc/150?u=david',
    rating: 5.0,
    reviews: 89,
    skills: ['C#', 'TypeScript', 'Azure'],
    color: '#00a4ef' // Microsoft Blue
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    company: 'Apple',
    role: 'iOS Engineer',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 4.8,
    reviews: 56,
    skills: ['Swift', 'UI/UX', 'CoreData'],
    color: '#000000' // Apple Black
  },
  {
    id: 4,
    name: 'James Wilson',
    company: 'Meta',
    role: 'Frontend Architect',
    avatar: 'https://i.pravatar.cc/150?u=james',
    rating: 4.9,
    reviews: 210,
    skills: ['React Native', 'GraphQL', 'Relay'],
    color: '#0668E1' // Meta Blue
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const Home = ({ onSelectMentor }) => {
  return (
    <motion.div 
      className="home-page page-content"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <header className="home-header">
        <div className="greeting">
          <p className="subtitle" style={{marginBottom: '4px'}}>Good evening,</p>
          <Logo size="small" />
        </div>
        <div className="avatar">ST</div>
      </header>
      
      <section className="featured-section">
        <h2 className="section-title">Top FAANG Mentors</h2>
        
        <motion.div 
          className="mentors-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {MENTORS.map((mentor) => (
            <motion.div 
              key={mentor.id} 
              className="mentor-card glass"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectMentor(mentor)}
            >
              <div className="card-header">
                <img src={mentor.avatar} alt={mentor.name} className="mentor-avatar" />
                <div className="mentor-info">
                  <h3>{mentor.name}</h3>
                  <div className="mentor-meta">
                    <span className="company-badge" style={{'--company-color': mentor.color}}>
                      {mentor.company}
                    </span>
                    <span className="rating">
                      <Star size={12} fill="#fbbf24" stroke="#fbbf24" />
                      {mentor.rating}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mentor-role"><Briefcase size={14} /> {mentor.role}</p>
              <div className="skills-row">
                {mentor.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
