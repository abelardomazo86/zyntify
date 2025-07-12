import React, { useState } from 'react';
import { 
  DollarSign, 
  Zap, 
  FileText, 
  Users, 
  TrendingUp, 
  Brain,
  Target,
  Eye,
  MessageSquare,
  BarChart3,
  Search,
  FileSearch,
  CheckCircle,
  XCircle,
  Calendar,
  CreditCard
} from 'lucide-react';
import { useSubscription } from '../../contexts/SubscriptionContext';

const AddOns: React.FC = () => {
  const { subscription, purchaseAddOn, cancelAddOn } = useSubscription();
  const [activeTab, setActiveTab] = useState('marketplace');

  const addOns = [
    {
      id: 'ai-swot',
      title: 'AI SWOT Assistant',
      description: 'Advanced SWOT analysis with AI-powered insights and strategic recommendations.',
      price: '$6',
      period: 'per business/month',
      icon: Target,
      category: 'monthly',
      features: [
        'Automated SWOT generation',
        'Strategic recommendations',
        'Competitive positioning',
        'Risk assessment',
        'Action plan creation',
      ],
      popular: false,
      usage: 'Existing analyzed business',
    },
    {
      id: 'ai-competitor-tracking',
      title: 'AI Competitor Tracking',
      description: 'Real-time competitor monitoring with automated alerts and market intelligence.',
      price: '$6',
      period: 'per business/month',
      icon: Eye,
      category: 'monthly',
      features: [
        'Real-time competitor monitoring',
        'Price tracking alerts',
        'Product launch detection',
        'Market share analysis',
        'Competitive intelligence reports',
      ],
      popular: true,
      usage: 'Existing analyzed business',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Enhanced team collaboration tools with advanced permissions and workflow management.',
      price: '$6',
      period: 'per business/month',
      icon: MessageSquare,
      category: 'monthly',
      features: [
        'Advanced team permissions',
        'Workflow automation',
        'Real-time collaboration',
        'Comment and review system',
        'Task assignment and tracking',
      ],
      popular: false,
      usage: 'Existing analyzed business',
    },
    {
      id: 'task-assignment',
      title: 'Task Assignment & Management',
      description: 'Project management tools with task assignment, deadlines, and progress tracking.',
      price: '$6',
      period: 'per business/month',
      icon: Users,
      category: 'monthly',
      features: [
        'Task creation and assignment',
        'Deadline management',
        'Progress tracking',
        'Team notifications',
        'Performance analytics',
      ],
      popular: false,
      usage: 'Existing analyzed business',
    },
    {
      id: 'crm-integration',
      title: 'CRM Integration',
      description: 'Connect with popular CRM platforms for enhanced customer insights and data synchronization.',
      price: '$6',
      period: 'per business/month',
      icon: BarChart3,
      category: 'monthly',
      features: [
        'Multi-CRM connectivity',
        'Data synchronization',
        'Customer journey mapping',
        'Sales pipeline analysis',
        'Lead scoring integration',
      ],
      popular: false,
      usage: 'Existing analyzed business',
    },
    {
      id: 'market-finder',
      title: 'Market Opportunity Finder',
      description: 'AI-powered market research to identify new opportunities and untapped market segments.',
      price: '$4',
      period: 'per request',
      icon: Search,
      category: 'pay-per-use',
      features: [
        'Market gap analysis',
        'Opportunity scoring',
        'Trend identification',
        'Market size estimation',
        'Entry strategy recommendations',
      ],
      popular: false,
      usage: 'Per request',
    },
    {
      id: 'document-analysis',
      title: 'Document Analysis',
      description: 'Upload and analyze business documents, contracts, and reports with AI-powered insights.',
      price: '$4',
      period: 'per document',
      icon: FileSearch,
      category: 'pay-per-use',
      features: [
        'Document parsing and analysis',
        'Key insights extraction',
        'Risk identification',
        'Compliance checking',
        'Summary generation',
      ],
      popular: false,
      usage: 'Per upload',
    },
  ];

  const myAddOns = [
    {
      id: 'ai-competitor-tracking',
      name: 'AI Competitor Tracking',
      status: 'Active',
      nextBilling: '2025-03-15',
      cost: '$6/month',
      usage: '2 businesses',
    },
    {
      id: 'collaboration',
      name: 'Collaboration',
      status: 'Active',
      nextBilling: '2025-03-15',
      cost: '$6/month',
      usage: '1 business',
    },
  ];

  const usageHistory = [
    {
      id: '1',
      addOn: 'Market Opportunity Finder',
      date: '2025-02-10',
      cost: '$4.00',
      business: 'TechStart Solutions',
      status: 'Completed',
    },
    {
      id: '2',
      addOn: 'Document Analysis',
      date: '2025-02-08',
      cost: '$4.00',
      business: 'Green Energy Co',
      status: 'Completed',
    },
    {
      id: '3',
      addOn: 'Market Opportunity Finder',
      date: '2025-02-05',
      cost: '$4.00',
      business: 'TechStart Solutions',
      status: 'Completed',
    },
  ];

  const handlePurchase = (addOnId: string) => {
    purchaseAddOn(addOnId);
  };

  const handleCancel = (addOnId: string) => {
    cancelAddOn(addOnId);
  };

  const isActive = (addOnId: string) => {
    return subscription.addOns.includes(addOnId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Completed':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
      case 'Cancelled':
        return 'text-red-600 bg-red-100 dark:bg-red-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Add-ons Hub
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Enhance your business analysis with powerful add-on features and integrations
        </p>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          {[
            { id: 'marketplace', label: 'Marketplace' },
            { id: 'my-addons', label: 'My Add-ons' },
            { id: 'usage', label: 'Usage History' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'marketplace' && (
            <div className="space-y-8">
              {/* Monthly Add-ons */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Monthly Add-ons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {addOns.filter(addon => addon.category === 'monthly').map((addOn) => (
                    <div
                      key={addOn.id}
                      className={`
                        glass rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                        ${addOn.popular ? 'border-primary-500 glow' : 'border-white/20 dark:border-gray-700/30'}
                        ${isActive(addOn.id) ? 'bg-green-50 dark:bg-green-900/20' : ''}
                      `}
                    >
                      {addOn.popular && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <div className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Popular
                          </div>
                        </div>
                      )}

                      <div className="text-center mb-4">
                        <div className="p-3 rounded-xl gradient-primary w-fit mx-auto mb-3 shadow-lg">
                          <addOn.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {addOn.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {addOn.description}
                        </p>
                        <div className="text-center">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {addOn.price}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1 text-sm">
                            {addOn.period}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {addOn.usage}
                        </p>
                      </div>

                      <div className="space-y-2 mb-6">
                        {addOn.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="h-1.5 w-1.5 bg-primary-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {isActive(addOn.id) ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">Active</span>
                          </div>
                          <button
                            onClick={() => handleCancel(addOn.id)}
                            className="w-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 py-2 px-4 rounded-xl font-medium text-sm transition-all duration-200 hover:bg-red-200 dark:hover:bg-red-800"
                          >
                            Cancel Subscription
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handlePurchase(addOn.id)}
                          className="w-full gradient-primary hover:shadow-2xl text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 glow-hover"
                        >
                          Subscribe Now
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pay-per-use Add-ons */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Pay-per-use Add-ons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addOns.filter(addon => addon.category === 'pay-per-use').map((addOn) => (
                    <div
                      key={addOn.id}
                      className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl gradient-primary shadow-lg">
                          <addOn.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {addOn.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {addOn.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xl font-bold text-gray-900 dark:text-white">
                                {addOn.price}
                              </span>
                              <span className="text-gray-500 dark:text-gray-400 ml-1 text-sm">
                                {addOn.period}
                              </span>
                            </div>
                            <button className="gradient-primary hover:shadow-2xl text-white py-2 px-4 rounded-xl font-medium text-sm transition-all duration-200 glow-hover">
                              Use Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'my-addons' && (
            <div className="space-y-6">
              {myAddOns.length > 0 ? (
                <div className="space-y-4">
                  {myAddOns.map((addon) => (
                    <div
                      key={addon.id}
                      className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl gradient-primary shadow-lg">
                            <Zap className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {addon.name}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                              <span>{addon.cost}</span>
                              <span>•</span>
                              <span>Usage: {addon.usage}</span>
                              <span>•</span>
                              <span>Next billing: {new Date(addon.nextBilling).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(addon.status)}`}>
                            {addon.status}
                          </span>
                          <button
                            onClick={() => handleCancel(addon.id)}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No active add-ons
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Browse our marketplace to enhance your business analysis capabilities.
                  </p>
                  <button
                    onClick={() => setActiveTab('marketplace')}
                    className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 glow-hover"
                  >
                    Browse Add-ons
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Usage History
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>Last 30 days</span>
                </div>
              </div>

              {usageHistory.length > 0 ? (
                <div className="space-y-4">
                  {usageHistory.map((usage) => (
                    <div
                      key={usage.id}
                      className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {usage.addOn}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>{usage.business}</span>
                            <span>•</span>
                            <span>{new Date(usage.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {usage.cost}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(usage.status)}`}>
                            {usage.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No usage history
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your add-on usage will appear here once you start using them.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddOns;