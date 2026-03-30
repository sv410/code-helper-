import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import MentorProfile from './pages/MentorProfile';
import MatchScreen from './pages/MatchScreen';
import Auth from './pages/Auth';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedMentor, setSelectedMentor] = useState(null);

  // Navigation handlers
  const navigateTo = (tab) => {
    setSelectedMentor(null); // Reset detail view when changing tabs
    setCurrentTab(tab);
  };

  const showMentorProfile = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleMatch = () => {
    setCurrentTab('match');
  };

  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-container">
      {/* Dynamic Content Area */}
      <main className="scroll-container">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && !selectedMentor && (
             <Home key="home" onSelectMentor={showMentorProfile} />
          )}
          {currentTab === 'home' && selectedMentor && (
             <MentorProfile 
               key="mentor-profile" 
               mentor={selectedMentor} 
               onBack={() => setSelectedMentor(null)} 
               onMatch={handleMatch}
             />
          )}
          {currentTab === 'matches' && (
             <motion.div 
               key="matches"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="page-content"
             >
               <h1 className="page-title">Your Matches</h1>
               <div className="empty-state">
                 <p>No active matches yet.</p>
                 <button onClick={() => setCurrentTab('home')} className="btn-primary">Find Mentors</button>
               </div>
             </motion.div>
          )}
          {currentTab === 'profile' && (
             <motion.div 
               key="profile"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="page-content"
             >
               <h1 className="page-title">Profile</h1>
               <div className="user-profile">
                 <div className="avatar large user-avatar">ST</div>
                 <h2>Student</h2>
                 <p className="subtitle">Looking for React Guidance</p>
                 <button className="btn-primary" style={{marginTop: '32px', background: 'transparent', border: '1px solid var(--danger-color)', color: 'var(--danger-color)'}} onClick={() => setIsAuthenticated(false)}>Log Out</button>
               </div>
             </motion.div>
          )}
          {currentTab === 'match' && (
             <MatchScreen key="match-success" onContinue={() => setCurrentTab('matches')} />
          )}
        </AnimatePresence>
      </main>

      {/* App Navigation */}
      {currentTab !== 'match' && (
        <BottomNav currentTab={currentTab} onChangeTab={navigateTo} />
      )}
    </div>
  );
}

export default App;
