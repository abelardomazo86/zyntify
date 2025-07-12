import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Brain, 
  Target, 
  Settings, 
  Users, 
  CreditCard,
  LogOut,
  Home,
  TrendingUp,
  DollarSign,
  Building,
  Activity,
  Zap,
  UserPlus,
  HelpCircle,
  Shield,
  Moon,
  Sun,
  X,
  Menu
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const { logout, user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', exact: true },
    { icon: Building, label: 'Businesses', path: '/dashboard/businesses' },
    { icon: Brain, label: 'AI Analysis', path: '/dashboard/analysis' },
    { icon: Target, label: 'Strategy', path: '/dashboard/strategy' },
    { icon: Activity, label: 'Monitoring', path: '/dashboard/monitoring' },
    { icon: TrendingUp, label: 'Growth Plan', path: '/dashboard/growth' },
    { icon: BarChart3, label: 'Reports', path: '/dashboard/reports' },
    { icon: Users, label: 'Competitors', path: '/dashboard/competitors' },
    { icon: Zap, label: 'Add-ons Hub', path: '/dashboard/addons' },
    { icon: UserPlus, label: 'Team', path: '/dashboard/team' },
    { icon: Shield, label: 'Integrations', path: '/dashboard/integrations' },
    { icon: DollarSign, label: 'Affiliate Center', path: '/dashboard/affiliate-center' },
    { icon: CreditCard, label: 'Billing', path: '/dashboard/billing' },
    { icon: HelpCircle, label: 'Support', path: '/dashboard/support' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full glass-sidebar z-50 shadow-2xl flex flex-col
        transition-all duration-300 ease-in-out
        ${isCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'translate-x-0 w-64'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 dark:border-gray-700/30">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-lg gradient-primary">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Zyntify
              </span>
            </div>
          )}
          
          {/* Theme Toggle - Top Right */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              )}
            </button>
            {!isCollapsed && (
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 lg:hidden transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) => `
                flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 text-sm
                ${isActive 
                  ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-700 dark:text-primary-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/30'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </NavLink>
          ))}
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`
              flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-white/10 dark:hover:bg-gray-700/30 transition-all duration-200 text-sm w-full
              ${isCollapsed ? 'justify-center' : ''}
            `}
            title={isCollapsed ? 'Logout' : undefined}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-white/10 dark:border-gray-700/30 space-y-3">
          {!isCollapsed && (
            <div className="flex items-center space-x-3 px-3 py-2">
              <div className="h-8 w-8 gradient-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-medium text-white">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;