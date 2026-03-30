import { Code2 } from 'lucide-react';
import './Logo.css';

const Logo = ({ size = 'normal' }) => {
  return (
    <div className={`app-logo ${size}`}>
      <div className="logo-icon-container">
        <Code2 strokeWidth={2.5} className="logo-icon" />
      </div>
      <span className="logo-text">
        Code<span className="logo-highlight">Helper</span>
      </span>
    </div>
  );
};

export default Logo;
