import React, { useState } from 'react';
import { 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Target,
  BarChart3,
  Calendar,
  Filter,
  RefreshCw,
  Bell,
  ArrowUp,
  ArrowDown,
  Zap,
  Eye,
  Play,
  Pause,
  Settings
} from 'lucide-react';
import { useSubscription } from '../../contexts/SubscriptionContext';

const Monitoring: React.FC = () => {
  const { canUseFeature } = useSubscription();
  const [activeTab, setActiveTab] = useState('ongoing');

  const hasStrategyMonitoring = canUseFeature('strategy-monitoring');

  const ongoingStrategies = [
    {
      id: '1',
      title: 'Customer Acquisition Strategy',
      business: 'TechStart Solutions',
      startDate: '2025-01-15',
      progress: 65,
      status: 'on-track',
      nextMilestone: 'Launch social media campaign',
      dueDate: '2025-02-20',
      aiRecommendation: 'Consider increasing ad spend by 20% based on current conversion rates',
      kpis: [
        { name: 'New Customers', current: 45, target: 100, unit: 'customers', trend: 'up' },
        { name: 'CAC', current: 85, target: 75, unit: '$', trend: 'down' },
        { name: 'Conversion Rate', current: 3.2, target: 4.0, unit: '%', trend: 'up' },
      ],
      alerts: [
        { type: 'warning', message: 'CAC trending above target', priority: 'medium' },
      ],
    },
    {
      id: '2',
      title: 'Operational Efficiency Improvement',
      business: 'Green Energy Co',
      startDate: '2025-01-01',
      progress: 40,
      status: 'at-risk',
      nextMilestone: 'Implement new workflow system',
      dueDate: '2025-02-15',
      aiRecommendation: 'Recommend accelerating automation implementation to meet targets',
      kpis: [
        { name: 'Process Time', current: 4.5, target: 3.0, unit: 'hours', trend: 'down' },
        { name: 'Cost Reduction', current: 12, target: 20, unit: '%', trend: 'up' },
        { name: 'Error Rate', current: 2.1, target: 1.0, unit: '%', trend: 'down' },
      ],
      alerts: [
        { type: 'urgent', message: 'Behind schedule on milestone delivery', priority: 'high' },
        { type: 'info', message: 'New automation tools available', priority: 'low' },
      ],
    },
  ];

  const recommendations = [
    {
      id: '1',
      type: 'urgent',
      title: 'Customer Acquisition Cost Rising',
      description: 'CAC has increased by 15% in the last month. Consider optimizing ad spend.',
      business: 'TechStart Solutions',
      timestamp: '2 hours ago',
      action: 'Review marketing channels',
      impact: 'High',
      aiConfidence: 92,
    },
    {
      id: '2',
      type: 'opportunity',
      title: 'Market Expansion Opportunity',
      description: 'New market segment showing 40% growth potential.',
      business: 'Green Energy Co',
      timestamp: '1 day ago',
      action: 'Analyze market entry strategy',
      impact: 'Medium',
      aiConfidence: 87,
    },
    {
      id: '3',
      type: 'warning',
      title: 'Competitor Price Drop',
      description: 'Main competitor reduced prices by 20%. Monitor impact on sales.',
      business: 'TechStart Solutions',
      timestamp: '3 days ago',
      action: 'Review pricing strategy',
      impact: 'Medium',
      aiConfidence: 78,
    },
  ];

  const liveMetrics = [
    {
      name: 'Revenue Growth',
      value: '+12.5%',
      change: '+2.3%',
      trend: 'up',
      status: 'good',
    },
    {
      name: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      status: 'excellent',
    },
    {
      name: 'Market Share',
      value: '15.2%',
      change: '-0.5%',
      trend: 'down',
      status: 'warning',
    },
    {
      name: 'Operational Efficiency',
      value: '87%',
      change: '+5%',
      trend: 'up',
      status: 'good',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
      case 'excellent':
      case 'good':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      case 'at-risk':
      case 'warning':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
      case 'delayed':
      case 'critical':
        return 'text-red-600 bg-red-100 dark:bg-red-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  const getRecommendationType = (type: string) => {
    switch (type) {
      case 'urgent':
        return { icon: AlertTriangle, color: 'text-red-600 bg-red-100 dark:bg-red-900' };
      case 'opportunity':
        return { icon: TrendingUp, color: 'text-green-600 bg-green-100 dark:bg-green-900' };
      case 'warning':
        return { icon: AlertTriangle, color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900' };
      default:
        return { icon: CheckCircle, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900' };
    }
  };

  if (!hasStrategyMonitoring) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Strategy Monitoring
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Track progress and monitor your business strategies in real-time
          </p>
        </div>

        <div className="min-h-96 flex items-center justify-center">
          <div className="text-center glass-card rounded-3xl shadow-2xl p-12 glow">
            <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Pro Feature
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Strategy monitoring and live tracking are available with our Pro plan. Upgrade to access 
              real-time strategy monitoring, AI recommendations, and automated alerts.
            </p>
            <button className="gradient-primary hover:shadow-2xl text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 glow-hover">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Strategy Monitoring
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Track progress and monitor your business strategies in real-time
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-200">
            <Filter className="h-4 w-4" />
            <span className="text-gray-900 dark:text-white">Filter</span>
          </button>
          <button className="flex items-center space-x-2 gradient-primary hover:shadow-2xl text-white px-4 py-2 rounded-xl transition-all duration-200 glow-hover">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Live Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {liveMetrics.map((metric, index) => (
          <div key={index} className="glass-card rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">{metric.name}</span>
              <div className="flex items-center space-x-1">
                {metric.trend === 'up' ? (
                  <ArrowUp className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                {metric.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-6 py-4 font-medium transition-all duration-200 ${
              activeTab === 'ongoing'
                ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Ongoing Strategies
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`px-6 py-4 font-medium transition-all duration-200 ${
              activeTab === 'recommendations'
                ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            AI Recommendations
          </button>
        </div>

        <div className="p-8">
          {activeTab === 'ongoing' && (
            <div className="space-y-6">
              {ongoingStrategies.map((strategy) => (
                <div
                  key={strategy.id}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {strategy.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(strategy.status)}`}>
                          {strategy.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{strategy.business}</span>
                        <span>•</span>
                        <span>Started {new Date(strategy.startDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {strategy.progress}%
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Complete
                        </div>
                      </div>
                      <button className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="gradient-primary h-2 rounded-full"
                        style={{ width: `${strategy.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="glass rounded-xl p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-primary-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          AI Recommendation
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {strategy.aiRecommendation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Alerts */}
                  {strategy.alerts.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                        Active Alerts
                      </h4>
                      <div className="space-y-2">
                        {strategy.alerts.map((alert, index) => (
                          <div
                            key={index}
                            className={`flex items-center space-x-3 p-3 rounded-lg ${
                              alert.type === 'urgent' ? 'bg-red-50 dark:bg-red-900/20' :
                              alert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                              'bg-blue-50 dark:bg-blue-900/20'
                            }`}
                          >
                            <Bell className={`h-4 w-4 ${
                              alert.type === 'urgent' ? 'text-red-600' :
                              alert.type === 'warning' ? 'text-yellow-600' :
                              'text-blue-600'
                            }`} />
                            <span className="text-sm text-gray-900 dark:text-white">
                              {alert.message}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                        Next Milestone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {strategy.nextMilestone}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>Due: {new Date(strategy.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                        Key Performance Indicators
                      </h4>
                      <div className="space-y-3">
                        {strategy.kpis.map((kpi, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">{kpi.name}</span>
                              {kpi.trend === 'up' ? (
                                <ArrowUp className="h-3 w-3 text-green-500" />
                              ) : (
                                <ArrowDown className="h-3 w-3 text-red-500" />
                              )}
                            </div>
                            <span className="text-sm text-gray-900 dark:text-white font-medium">
                              {kpi.current}{kpi.unit} / {kpi.target}{kpi.unit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-4">
              {recommendations.map((rec) => {
                const { icon: Icon, color } = getRecommendationType(rec.type);
                return (
                  <div
                    key={rec.id}
                    className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${color} shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {rec.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                              {rec.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <span>{rec.business}</span>
                              <span>•</span>
                              <span>{rec.timestamp}</span>
                              <span>•</span>
                              <span>Impact: {rec.impact}</span>
                              <span>•</span>
                              <span>AI Confidence: {rec.aiConfidence}%</span>
                            </div>
                          </div>
                          
                          <button className="gradient-primary hover:shadow-2xl text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 glow-hover">
                            {rec.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Monitoring;