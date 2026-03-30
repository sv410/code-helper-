import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User as UserIcon, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import './Auth.css';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <motion.div 
        className="auth-container glass"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
           <Logo size="large" />
           <p className="auth-subtitle">
             {isLogin ? 'Welcome back, student' : 'Start your FAANG journey'}
           </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div 
                key="name"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="input-group"
              >
                <div className="input-wrapper">
                  <UserIcon size={20} className="input-icon" />
                  <input type="text" placeholder="Full Name" required={!isLogin} />
                </div>
              </motion.div>
            )}
            <motion.div key="email" className="input-group">
               <div className="input-wrapper">
                 <Mail size={20} className="input-icon" />
                 <input type="email" placeholder="Email Address" required />
               </div>
            </motion.div>
            <motion.div key="password" className="input-group">
               <div className="input-wrapper">
                 <Lock size={20} className="input-icon" />
                 <input type="password" placeholder="Password" required />
               </div>
            </motion.div>
          </AnimatePresence>

          <button type="submit" className="btn-primary auth-submit">
             {isLogin ? 'Sign In' : 'Create Account'}
             <ArrowRight size={20} />
          </button>
        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <button className="social-btn" onClick={handleSubmit}>
          <span>GitHub</span>
        </button>

        <div className="auth-toggle">
           <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
           <button type="button" onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
             {isLogin ? 'Sign up' : 'Log in'}
           </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
