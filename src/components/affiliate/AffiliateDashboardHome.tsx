import React from 'react';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  CreditCard,
  Link as LinkIcon,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AffiliateDashboardHome: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Earnings',
      value: '$2,450.00',
      change: '+$680 this month',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      title: 'Active Referrals',
      value: '18',
      change: '+3 this month',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      title: 'Conversion Rate',
      value: '12.5%',
      change: '+2.3% this month',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      title: 'Link Clicks',
      value: '1,247',
      change: '+156 this week',
      trend: 'up',
      icon: Eye,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
    },
  ];

  const recentEarnings = [
    {
      date: '2025-02-10',
      amount: '$12.00',
      type: 'Commission',
      referral: 'user1@example.com',
      plan: 'Pro',
    },
    {
      date: '2025-02-08',
      amount: '$12.00',
      type: 'Commission',
      referral: 'user2@example.com',
      plan: 'Pro',
    },
    {
      date: '2025-02-05',
      amount: '$200.00',
      type: 'Bonus',
      referral: 'user3@example.com',
      plan: 'Pro (3-month retention)',
    },
  ];

  const quickActions = [
    {
      title: 'Get Referral Link',
      description: 'Copy your unique referral link',
      icon: LinkIcon,
      color: 'bg-primary-600',
      action: 'Get Link',
    },
    {
      title: 'View Analytics',
      description: 'Check your performance metrics',
      icon: BarChart3,
      color: 'bg-secondary-600',
      action: 'View Stats',
    },
    {
      title: 'Request Payout',
      description: 'Withdraw your earnings',
      icon: CreditCard,
      color: 'bg-green-600',
      action: 'Request',
    },
    {
      title: 'Marketing Tools',
      description: 'Access banners and resources',
      icon: Eye,
      color: 'bg-orange-600',
      action: 'Browse',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Here's your affiliate performance overview.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4" />
            <span className="text-sm font-medium">Available: $680.00</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 glow-hover"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl gradient-primary shadow-lg">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <span>{stat.change}</span>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 ml-1" />
                )}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl shadow-xl p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 glow-hover"
            >
              <div className="p-3 rounded-xl gradient-primary w-fit mb-4 shadow-lg">
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {action.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {action.description}
              </p>
              <button className="w-full glass hover:bg-white/20 dark:hover:bg-gray-700/50 text-gray-900 dark:text-white py-2 px-4 rounded-lg font-medium transition-all duration-200">
                {action.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Earnings */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Earnings
          </h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
            <span>View All</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="glass-card rounded-2xl shadow-xl">
          {recentEarnings.map((earning, index) => (
            <div
              key={index}
              className={`
                p-6 flex items-center justify-between
                ${index !== recentEarnings.length - 1 ? 'border-b border-white/10 dark:border-gray-700/30' : ''}
              `}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {earning.amount}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    earning.type === 'Bonus' 
                      ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                      : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  }`}>
                    {earning.type}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{earning.referral}</span>
                  <span>•</span>
                  <span>{earning.plan}</span>
                  <span>•</span>
                  <span>{new Date(earning.date).toLocaleDateString()}</span>
                </div>
              </div>
              <button className="text-primary-600 hover:text-primary-700">
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Settings */}
      <div className="glass-card rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Payout Settings
          </h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Edit
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">Method:</span>
            <p className="font-medium text-gray-900 dark:text-white">PayPal</p>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Email:</span>
            <p className="font-medium text-gray-900 dark:text-white">{user?.email}</p>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Next Payout:</span>
            <p className="font-medium text-gray-900 dark:text-white">March 1, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboardHome;