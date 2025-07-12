import React, { useState } from 'react';
import { 
  Zap, 
  Key, 
  Bell, 
  Settings, 
  ExternalLink, 
  CheckCircle,
  XCircle,
  Plus,
  Trash2,
  Eye,
  EyeOff
} from 'lucide-react';

const Integrations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('integrations');
  const [showApiKey, setShowApiKey] = useState(false);

  const integrations = [
    {
      id: '1',
      name: 'Google Analytics',
      description: 'Connect your website analytics for deeper business insights',
      category: 'Analytics',
      status: 'Connected',
      icon: '📊',
      lastSync: '2 hours ago',
      features: ['Website Traffic', 'User Behavior', 'Conversion Tracking'],
    },
    {
      id: '2',
      name: 'Stripe',
      description: 'Sync payment data for financial analysis',
      category: 'Payments',
      status: 'Available',
      icon: '💳',
      features: ['Revenue Tracking', 'Customer Metrics', 'Payment Analytics'],
    },
    {
      id: '3',
      name: 'HubSpot CRM',
      description: 'Import customer and sales data',
      category: 'CRM',
      status: 'Available',
      icon: '👥',
      features: ['Contact Management', 'Sales Pipeline', 'Lead Tracking'],
    },
    {
      id: '4',
      name: 'QuickBooks',
      description: 'Connect accounting data for financial insights',
      category: 'Accounting',
      status: 'Available',
      icon: '📚',
      features: ['Financial Reports', 'Expense Tracking', 'Tax Data'],
    },
    {
      id: '5',
      name: 'Shopify',
      description: 'E-commerce data integration',
      category: 'E-commerce',
      status: 'Available',
      icon: '🛒',
      features: ['Sales Data', 'Product Analytics', 'Customer Insights'],
    },
    {
      id: '6',
      name: 'Slack',
      description: 'Get notifications and updates in your workspace',
      category: 'Communication',
      status: 'Connected',
      icon: '💬',
      lastSync: '1 day ago',
      features: ['Real-time Alerts', 'Report Sharing', 'Team Updates'],
    },
  ];

  const apiKeys = [
    {
      id: '1',
      name: 'Production API Key',
      key: 'bzt_live_sk_1234567890abcdef',
      created: '2025-01-15',
      lastUsed: '2 hours ago',
      permissions: ['Read', 'Write'],
    },
    {
      id: '2',
      name: 'Development API Key',
      key: 'zyn_test_sk_abcdef1234567890',
      created: '2025-01-10',
      lastUsed: '1 week ago',
      permissions: ['Read'],
    },
  ];

  const notificationSettings = [
    {
      id: 'analysis_complete',
      title: 'Analysis Complete',
      description: 'Get notified when AI analysis is finished',
      email: true,
      push: true,
      slack: false,
    },
    {
      id: 'strategy_updates',
      title: 'Strategy Updates',
      description: 'Receive updates on strategy progress and milestones',
      email: true,
      push: false,
      slack: true,
    },
    {
      id: 'team_activity',
      title: 'Team Activity',
      description: 'Notifications about team member actions',
      email: false,
      push: true,
      slack: true,
    },
    {
      id: 'billing_alerts',
      title: 'Billing Alerts',
      description: 'Payment confirmations and billing issues',
      email: true,
      push: true,
      slack: false,
    },
    {
      id: 'security_alerts',
      title: 'Security Alerts',
      description: 'Important security and account notifications',
      email: true,
      push: true,
      slack: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      case 'Available':
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
      case 'Error':
        return 'text-red-600 bg-red-100 dark:bg-red-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  const handleToggleNotification = (id: string, type: 'email' | 'push' | 'slack') => {
    // Handle notification toggle
    console.log(`Toggle ${type} for ${id}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Integrations & Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Connect your tools and manage API access
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {[
            { id: 'integrations', label: 'Integrations', icon: Zap },
            { id: 'api-keys', label: 'API Keys', icon: Key },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'account', label: 'Account Settings', icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'integrations' && (
            <div className="space-y-6">
              <div className="grid gap-6">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{integration.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {integration.name}
                            </h3>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
                              {integration.category}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {integration.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {integration.features.map((feature, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          {integration.lastSync && (
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                              Last sync: {integration.lastSync}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(integration.status)}`}>
                          {integration.status}
                        </span>
                        {integration.status === 'Connected' ? (
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Disconnect
                          </button>
                        ) : (
                          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                            Connect
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'api-keys' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    API Keys
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Manage your API keys for programmatic access
                  </p>
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Create API Key</span>
                </button>
              </div>

              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div
                    key={apiKey.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {apiKey.name}
                        </h3>
                        <div className="flex items-center space-x-3 mb-3">
                          <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm font-mono">
                            {showApiKey ? apiKey.key : '••••••••••••••••••••••••••••••••'}
                          </code>
                          <button
                            onClick={() => setShowApiKey(!showApiKey)}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                          <span>Created: {new Date(apiKey.created).toLocaleDateString()}</span>
                          <span>Last used: {apiKey.lastUsed}</span>
                          <div className="flex items-center space-x-2">
                            <span>Permissions:</span>
                            {apiKey.permissions.map((permission, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs"
                              >
                                {permission}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                          <Settings className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-700 transition-colors duration-200">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Notification Preferences
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Choose how you want to receive notifications
                </p>
              </div>

              <div className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div
                    key={setting.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {setting.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {setting.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Email</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={setting.email}
                            onChange={() => handleToggleNotification(setting.id, 'email')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Push</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={setting.push}
                            onChange={() => handleToggleNotification(setting.id, 'push')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Slack</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={setting.slack}
                            onChange={() => handleToggleNotification(setting.id, 'slack')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Account Settings
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Manage your account preferences and security settings
                </p>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Data Export
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Export all your business data and analysis results
                  </p>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Request Data Export
                  </button>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Account Deletion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Permanently delete your account and all associated data
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Integrations;