import React, { useState } from 'react';
import { 
  Link as LinkIcon, 
  Copy, 
  Eye, 
  Download,
  ExternalLink,
  BarChart3,
  Calendar,
  TrendingUp,
  Users,
  Calculator
} from 'lucide-react';

const ReferralTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState('links');
  const [referralLink] = useState('https://zyntify.com/ref/affiliate-partner-123');

  const referralLinks = [
    {
      id: '1',
      name: 'Main Referral Link',
      url: 'https://zyntify.com/ref/affiliate-partner-123',
      clicks: 1247,
      conversions: 18,
      created: '2025-01-15',
    },
    {
      id: '2',
      name: 'Landing Page Link',
      url: 'https://zyntify.com/ref/affiliate-partner-123?source=landing',
      clicks: 856,
      conversions: 12,
      created: '2025-01-20',
    },
    {
      id: '3',
      name: 'Blog Post Link',
      url: 'https://zyntify.com/ref/affiliate-partner-123?source=blog',
      clicks: 432,
      conversions: 6,
      created: '2025-02-01',
    },
  ];

  const banners = [
    {
      id: '1',
      name: 'Hero Banner - 728x90',
      size: '728x90',
      clicks: 234,
      conversions: 3,
      preview: '🎯',
      description: 'Perfect for website headers and blog posts',
    },
    {
      id: '2',
      name: 'Square Banner - 300x300',
      size: '300x300',
      clicks: 189,
      conversions: 2,
      preview: '📊',
      description: 'Great for sidebars and social media',
    },
    {
      id: '3',
      name: 'Vertical Banner - 160x600',
      size: '160x600',
      clicks: 156,
      conversions: 1,
      preview: '🚀',
      description: 'Ideal for sidebar placements',
    },
    {
      id: '4',
      name: 'Mobile Banner - 320x50',
      size: '320x50',
      clicks: 98,
      conversions: 1,
      preview: '📱',
      description: 'Optimized for mobile websites',
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Show success message
  };

  const getConversionRate = (clicks: number, conversions: number) => {
    return clicks > 0 ? ((conversions / clicks) * 100).toFixed(1) : '0.0';
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Referral Tools
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Access your referral links, banners, and marketing materials
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2,535</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Clicks</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">36</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Conversions</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">14.2%</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Conversion Rate</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Active Links</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          {[
            { id: 'links', label: 'Referral Links', icon: LinkIcon },
            { id: 'banners', label: 'Banners & Creatives', icon: Eye },
            { id: 'calculator', label: 'Commission Calculator', icon: Calculator },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'links' && (
            <div className="space-y-6">
              {/* Main Referral Link */}
              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Your Main Referral Link
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <code className="text-sm text-gray-900 dark:text-white break-all">
                      {referralLink}
                    </code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(referralLink)}
                    className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition-colors duration-200"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Share this link to earn 30% commission on every Pro subscription
                </p>
              </div>

              {/* Link Performance */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Link Performance
                </h3>
                <div className="space-y-4">
                  {referralLinks.map((link) => (
                    <div
                      key={link.id}
                      className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {link.name}
                          </h4>
                          <code className="text-sm text-gray-600 dark:text-gray-400 break-all">
                            {link.url}
                          </code>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => copyToClipboard(link.url)}
                            className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                          <button className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                            <ExternalLink className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Clicks:</span>
                          <p className="font-semibold text-gray-900 dark:text-white">{link.clicks}</p>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Conversions:</span>
                          <p className="font-semibold text-gray-900 dark:text-white">{link.conversions}</p>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Rate:</span>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {getConversionRate(link.clicks, link.conversions)}%
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Created:</span>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {new Date(link.created).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'banners' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Marketing Banners & Creatives
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Download high-quality banners and creatives for your marketing campaigns
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {banners.map((banner) => (
                  <div
                    key={banner.id}
                    className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{banner.preview}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {banner.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {banner.size} • {banner.description}
                          </p>
                        </div>
                      </div>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors duration-200">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm pt-4 border-t border-white/10 dark:border-gray-700/30">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Clicks:</span>
                        <p className="font-semibold text-gray-900 dark:text-white">{banner.clicks}</p>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Conversions:</span>
                        <p className="font-semibold text-gray-900 dark:text-white">{banner.conversions}</p>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Rate:</span>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {getConversionRate(banner.clicks, banner.conversions)}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Commission Calculator
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Calculate your potential earnings based on referrals and retention
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Number of Referrals
                      </label>
                      <input
                        type="number"
                        defaultValue="10"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Conversion Rate (%)
                      </label>
                      <input
                        type="number"
                        defaultValue="12.5"
                        step="0.1"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        3-Month Retention Rate (%)
                      </label>
                      <input
                        type="number"
                        defaultValue="80"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Monthly Recurring Commission
                      </h4>
                      <p className="text-2xl font-bold text-green-600">$36.00</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Based on 3 conversions × $12/month
                      </p>
                    </div>
                    
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        3-Month Retention Bonuses
                      </h4>
                      <p className="text-2xl font-bold text-yellow-600">$480.00</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Based on 2.4 retained users × $200
                      </p>
                    </div>
                    
                    <div className="glass rounded-xl p-4 border-2 border-primary-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Total First Year Earnings
                      </h4>
                      <p className="text-3xl font-bold text-primary-600">$912.00</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Recurring + Bonuses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralTools;