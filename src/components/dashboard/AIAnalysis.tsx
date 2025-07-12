import React, { useState } from 'react';
import { Brain, Zap, TrendingUp, AlertCircle, CheckCircle, Clock, Target, DollarSign, Users, Search, BarChart3, FileText } from 'lucide-react';
import { useSubscription } from '../../contexts/SubscriptionContext';

const AIAnalysis: React.FC = () => {
  const { subscription, canUseFeature } = useSubscription();
  const [activeModule, setActiveModule] = useState('general');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const analysisModules = [
    {
      id: 'general',
      title: 'General Analysis',
      description: 'Comprehensive business performance overview',
      icon: Brain,
      available: canUseFeature('basic-analysis'),
      duration: '2-3 minutes',
    },
    {
      id: 'competitor',
      title: 'Competitor Analysis',
      description: 'Deep dive into competitive landscape',
      icon: Users,
      available: canUseFeature('competitor-analysis'),
      duration: '3-5 minutes',
    },
    {
      id: 'financial',
      title: 'Financial Analysis',
      description: 'Financial health and forecasting insights',
      icon: DollarSign,
      available: canUseFeature('advanced-analysis'),
      duration: '4-6 minutes',
    },
    {
      id: 'loophole',
      title: 'Loophole Analysis',
      description: 'Identify market gaps and opportunities',
      icon: Search,
      available: canUseFeature('advanced-analysis'),
      duration: '3-4 minutes',
    },
    {
      id: 'strategy',
      title: 'Strategy Analysis',
      description: 'Strategic planning and recommendations',
      icon: Target,
      available: canUseFeature('strategy-planning'),
      duration: '5-7 minutes',
    },
    {
      id: 'action-plans',
      title: 'Action Plans',
      description: 'Automated actionable roadmaps',
      icon: FileText,
      available: canUseFeature('strategy-planning'),
      duration: '4-5 minutes',
    },
  ];

  const handleStartAnalysis = (moduleId: string) => {
    setActiveModule(moduleId);
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const mockResults = {
    general: {
      score: 87,
      insights: [
        {
          category: 'Revenue Growth',
          score: 92,
          status: 'excellent',
          insight: 'Your revenue growth rate of 45% year-over-year is exceptional for your industry.',
          recommendation: 'Continue scaling your successful customer acquisition channels.',
        },
        {
          category: 'Market Position',
          score: 78,
          status: 'good',
          insight: 'You hold a strong position in your niche market with room for expansion.',
          recommendation: 'Consider expanding to adjacent markets with similar customer profiles.',
        },
        {
          category: 'Operational Efficiency',
          score: 71,
          status: 'warning',
          insight: 'Your operational costs are higher than industry average by 15%.',
          recommendation: 'Audit your processes and consider automation for repetitive tasks.',
        },
      ],
    },
    competitor: {
      score: 75,
      insights: [
        {
          category: 'Market Share',
          score: 68,
          status: 'good',
          insight: 'You hold 12% market share in your primary segment.',
          recommendation: 'Focus on customer retention to defend your position.',
        },
        {
          category: 'Pricing Strategy',
          score: 85,
          status: 'excellent',
          insight: 'Your pricing is competitive and well-positioned.',
          recommendation: 'Consider premium pricing for new features.',
        },
      ],
    },
    financial: {
      score: 82,
      insights: [
        {
          category: 'Cash Flow',
          score: 95,
          status: 'excellent',
          insight: 'Your cash flow management is excellent with healthy reserves.',
          recommendation: 'Consider strategic investments in growth initiatives.',
        },
        {
          category: 'Profitability',
          score: 73,
          status: 'good',
          insight: 'Profit margins are stable but could be optimized.',
          recommendation: 'Review cost structure and pricing strategy.',
        },
      ],
    },
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Running {analysisModules.find(m => m.id === activeModule)?.title}...
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI is processing your business data and generating insights
          </p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const currentResults = mockResults[activeModule as keyof typeof mockResults] || mockResults.general;
    
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {analysisModules.find(m => m.id === activeModule)?.title} Results
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Generated on {new Date().toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={() => setShowResults(false)}
            className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 glow-hover"
          >
            New Analysis
          </button>
        </div>

        {/* Overall Score */}
        <div className="glass-card rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - currentResults.score / 100)}`}
                  className="text-primary-600"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {currentResults.score}%
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Overall Score
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your business is performing well with several areas for optimization
            </p>
          </div>
        </div>

        {/* Insights */}
        <div className="grid gap-6">
          {currentResults.insights.map((insight, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    insight.status === 'excellent' ? 'bg-green-100 dark:bg-green-900' :
                    insight.status === 'good' ? 'bg-blue-100 dark:bg-blue-900' :
                    'bg-yellow-100 dark:bg-yellow-900'
                  }`}>
                    {insight.status === 'excellent' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : insight.status === 'good' ? (
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {insight.category}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {insight.score}%
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Insight:</span> {insight.insight}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Recommendation:</span> {insight.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          AI Analysis Modules
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Get instant insights about your business powered by artificial intelligence
        </p>
      </div>

      {/* Usage Stats */}
      <div className="glass-card rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Analysis Usage
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {subscription.plan === 'pro' 
                ? 'Unlimited analyses available'
                : `${subscription.analysesUsed} of ${subscription.analysesLimit} analyses used this month`
              }
            </p>
          </div>
          {subscription.plan === 'free' && (
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">
                {subscription.analysesLimit - subscription.analysesUsed}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Remaining
              </div>
            </div>
          )}
        </div>
        
        {subscription.plan === 'free' && (
          <div className="mt-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full"
                style={{ width: `${(subscription.analysesUsed / subscription.analysesLimit) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Analysis Modules */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Choose Analysis Module
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisModules.map((module) => (
            <div
              key={module.id}
              className={`
                glass-card rounded-2xl shadow-xl p-6 transition-all duration-300
                ${module.available ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-1 glow-hover' : 'opacity-60'}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl gradient-primary shadow-lg">
                  <module.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {module.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {module.description}
              </p>
              
              <button
                onClick={() => module.available && handleStartAnalysis(module.id)}
                disabled={!module.available}
                className={`
                  w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2
                  ${module.available
                    ? 'gradient-primary hover:shadow-2xl text-white glow-hover'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                <Zap className="h-4 w-4" />
                <span>{module.available ? 'Start Analysis' : 'Pro Feature'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {subscription.plan === 'free' && (
        <div className="gradient-primary rounded-2xl p-8 text-white">
          <div className="flex items-center space-x-4">
            <Zap className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-bold mb-2">
                Unlock Advanced Analysis
              </h3>
              <p className="opacity-90 mb-4">
                Upgrade to Pro for unlimited analyses, advanced insights, and strategic planning tools
              </p>
              <button className="bg-white/90 text-primary-600 hover:bg-white hover:shadow-2xl px-6 py-2 rounded-xl font-semibold transition-all duration-200 glow-hover">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnalysis;