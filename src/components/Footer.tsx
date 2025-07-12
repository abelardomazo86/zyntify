import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700 px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl gradient-primary shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Zyntify</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Zyntify delivers AI-powered business analysis, strategy, actionable plans, and proactive loophole detection to help entrepreneurs worldwide optimize, protect, and grow their ventures.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white text-sm">Product</h4>
            <div className="space-y-1">
              <Link 
                to="/features" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Pricing
              </Link>
              <Link 
                to="/register" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white text-sm">Partners</h4>
            <div className="space-y-1">
              <Link 
                to="/affiliate" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Affiliate Program
              </Link>
              <Link 
                to="/affiliate-register" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Partner Signup
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white text-sm">Support</h4>
            <div className="space-y-1">
              <Link 
                to="/help-center" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Help Center
              </Link>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Contact
              </Link>
              <Link 
                to="/terms-privacy" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                Terms & Privacy
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">&copy; 2025 Zyntify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;