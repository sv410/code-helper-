import { motion } from 'framer-motion';
import { Sparkles, CheckCircle } from 'lucide-react';
import './MatchScreen.css';

const MatchScreen = ({ onContinue }) => {
  return (
    <motion.div 
      className="match-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="match-content">
        <motion.div
           initial={{ scale: 0, rotate: -180 }}
           animate={{ scale: 1, rotate: 0 }}
           transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
           className="success-icon-container"
        >
          <div className="icon-glow"></div>
          <CheckCircle size={80} color="var(--success-color)" />
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="match-title-row">
            <Sparkles className="sparkle left" size={24} color="#fbbf24" />
            <h1 className="match-title">It's a Match!</h1>
            <Sparkles className="sparkle right" size={24} color="#fbbf24" />
          </div>
          
          <p className="match-subtitle">
            Your request has been sent successfully. The mentor will review your profile and reach out shortly.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="match-actions"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="btn-primary continue-btn" onClick={onContinue}>
          Awesome, Continue
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MatchScreen;
