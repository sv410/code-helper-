import { Compass, MessageSquare, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav = ({ currentTab, onChangeTab }) => {
  const tabs = [
    { id: 'home', icon: Compass, label: 'Discover' },
    { id: 'matches', icon: MessageSquare, label: 'Matches' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="bottom-nav glass">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        
        return (
          <button
            key={tab.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onChangeTab(tab.id)}
          >
            <div className="icon-wrapper">
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && <div className="nav-indicator" />}
            </div>
            <span className="nav-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
