import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 pt-5">
      <nav className="flex items-center justify-between p-6 lg:px-8 glass-card mx-4 rounded-2xl backdrop-blur-xl">
        <Link to="/" className="flex items-center space-x-2">
          <div className="p-2 rounded-xl gradient-primary shadow-lg">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Zyntify
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link
            to="/features"
            onClick={handleMenuClick}
            className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive('/features')
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            onClick={handleMenuClick}
            className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive('/pricing')
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/login"
            onClick={handleMenuClick}
            className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive('/login')
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            Sign In
          </Link>
          <Link
            to="/register"
            onClick={handleMenuClick}
            className="gradient-primary hover:shadow-lg text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 glow-hover"
          >
            Start Free
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;