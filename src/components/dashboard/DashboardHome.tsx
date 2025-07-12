import React from 'react';
import { 
  TrendingUp, 
  Brain, 
  Target, 
  Users, 
  DollarSign, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Zap
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useSubscription } from '../../contexts/SubscriptionContext';

const DashboardHome: React.FC = () => {
  const { user } = useAuth();
  const { subscription, canUseFeature } = useSubscription();

  const stats = [
    {
      title: 'Business Health Score',
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      title: 'Market Position',
      value: '72%',
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      title: 'Growth Potential',
      value: '94%',
      change: '+8%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      title: 'Analyses Used',
      value: `${subscription.analysesUsed}/${subscription.analysesLimit === -1 ? '∞' : subscription.analysesLimit}`,
      change: subscription.plan === 'pro' ? 'Unlimited' : `${subscription.analysesLimit - subscription.analysesUsed} left`,
      trend: 'neutral',
      icon: Brain,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
    },
  ];

  const recentAnalyses = [
    {
      title: 'Market Opportunity Analysis',
      date: '2 hours ago',
      score: 92,
      type: 'Market Research',
    },
    {
      title: 'Competitor Benchmarking',
      date: '1 day ago',
      score: 78,
      type: 'Competitive Analysis',
    },
    {
      title: 'Financial Health Check',
      date: '3 days ago',
      score: 85,
      type: 'Financial Analysis',
    },
  ];

  const quickActions = [
    {
      title: 'New AI Analysis',
      description: 'Get instant insights about your business',
      icon: Brain,
      color: 'bg-primary-600',
      action: 'Start Analysis',
      available: canUseFeature('basic-analysis'),
    },
    {
      title: 'Strategy Planning',
      description: 'Create a growth strategy for your business',
      icon: Target,
      color: 'bg-secondary-600',
      action: 'Plan Strategy',
      available: canUseFeature('strategy-planning'),
    },
    {
      title: 'Competitor Research',
      description: 'Analyze your competition and market position',
      icon: Users,
      color: 'bg-accent-600',
      action: 'Research Competitors',
      available: canUseFeature('competitor-analysis'),
    },
    {
      title: 'Growth Plan',
      description: 'Get a personalized roadmap for growth',
      icon: TrendingUp,
      color: 'bg-green-600',
      action: 'Create Plan',
      available: canUseFeature('advanced-analysis'),
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
            Here's what's happening with {user?.businessName || 'your business'}.
          </p>
        </div>
        
        {subscription.plan === 'free' && (
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Upgrade to Pro</span>
            </div>
          </div>
        )}
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
              {stat.trend !== 'neutral' && (
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
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.title}
              </p>
              {stat.trend === 'neutral' && (
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  {stat.change}
                </p>
              )}
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
              className={`
                glass-card rounded-2xl shadow-xl p-6 
                ${action.available ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 glow-hover' : 'opacity-60'}
              `}
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
              <button
                className={`
                  w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200
                  ${action.available
                    ? 'glass hover:bg-white/20 dark:hover:bg-gray-700/50 text-gray-900 dark:text-white'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  }
                `}
                disabled={!action.available}
              >
                {action.available ? action.action : 'Pro Feature'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Analyses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Analyses
          </h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
            <span>View All</span>
            <Plus className="h-4 w-4" />
          </button>
        </div>
        
        <div className="glass-card rounded-2xl shadow-xl">
          {recentAnalyses.map((analysis, index) => (
            <div
              key={index}
              className={`
                p-6 flex items-center justify-between
                ${index !== recentAnalyses.length - 1 ? 'border-b border-white/10 dark:border-gray-700/30' : ''}
              `}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {analysis.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{analysis.date}</span>
                  <span>•</span>
                  <span>{analysis.type}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {analysis.score}%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Score
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;