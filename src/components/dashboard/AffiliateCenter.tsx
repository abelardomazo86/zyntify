import React, { useState } from 'react';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Copy, 
  ExternalLink, 
  Calendar,
  BarChart3,
  Gift,
  Share2,
  Download
} from 'lucide-react';

const AffiliateCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [referralLink] = useState('https://zyntify.com/ref/john-smith-123');

  const stats = {
    totalEarnings: 2450.00,
    thisMonth: 680.00,
    totalReferrals: 24,
    activeReferrals: 18,
    conversionRate: 12.5,
    clickThroughRate: 3.2,
  };

  const recentReferrals = [
    {
      id: '1',
      email: 'user1@example.com',
      plan: 'Pro',
      status: 'Active',
      signupDate: '2025-02-10',
      commission: 12.00,
      recurring: true,
    },
    {
      id: '2',
      email: 'user2@example.com',
      plan: 'Pro',
      status: 'Active',
      signupDate: '2025-02-08',
      commission: 12.00,
      recurring: true,
    },
    {
      id: '3',
      email: 'user3@example.com',
      plan: 'Free',
      status: 'Pending',
      signupDate: '2025-02-07',
      commission: 0.00,
      recurring: false,
    },
  ];

  const payouts = [
    {
      id: '1',
      amount: 360.00,
      date: '2025-02-01',
      status: 'Paid',
      method: 'PayPal',
      referrals: 30,
    },
    {
      id: '2',
      amount: 480.00,
      date: '2025-01-01',
      status: 'Paid',
      method: 'Bank Transfer',
      referrals: 40,
    },
    {
      id: '3',
      amount: 240.00,
      date: '2024-12-01',
      status: 'Paid',
      method: 'PayPal',
      referrals: 20,
    },
  ];

  const marketingMaterials = [
    {
      id: '1',
      title: 'Email Template - Business Analysis',
      type: 'Email',
      description: 'Professional email template for reaching out to potential customers',
      downloads: 156,
    },
    {
      id: '2',
      title: 'Social Media Graphics Pack',
      type: 'Graphics',
      description: 'Instagram, Facebook, and LinkedIn graphics for social promotion',
      downloads: 89,
    },
    {
      id: '3',
      title: 'Blog Post Template',
      type: 'Content',
      description: 'Ready-to-use blog post about AI business analysis benefits',
      downloads: 67,
    },
    {
      id: '4',
      title: 'Product Demo Video',
      type: 'Video',
      description: '2-minute product demonstration video for sharing',
      downloads: 134,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Show success message
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Paid':
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
          Affiliate Center
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Track your referrals, earnings, and access marketing resources
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ${stats.totalEarnings.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Earnings</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ${stats.thisMonth.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">This Month</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.totalReferrals}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Referrals</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.activeReferrals}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Active</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.conversionRate}%
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Conversion</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <ExternalLink className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.clickThroughRate}%
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">CTR</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'referrals', label: 'Referrals' },
            { id: 'earnings', label: 'Earnings' },
            { id: 'tools', label: 'Marketing Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Referral Link */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-secondary-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Your Referral Link
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
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
                  <button className="bg-secondary-600 hover:bg-secondary-700 text-white p-3 rounded-lg transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Referrals
                </h3>
                <div className="space-y-3">
                  {recentReferrals.slice(0, 3).map((referral) => (
                    <div
                      key={referral.id}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {referral.email}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>{referral.plan} Plan</span>
                          <span>•</span>
                          <span>{new Date(referral.signupDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(referral.status)}`}>
                          {referral.status}
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ${referral.commission.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'referrals' && (
            <div className="space-y-4">
              {recentReferrals.map((referral) => (
                <div
                  key={referral.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {referral.email}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{referral.plan} Plan</span>
                      <span>•</span>
                      <span>Signed up: {new Date(referral.signupDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{referral.recurring ? 'Recurring' : 'One-time'}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(referral.status)}`}>
                      {referral.status}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ${referral.commission.toFixed(2)}/month
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Payout History
                </h3>
                <div className="space-y-4">
                  {payouts.map((payout) => (
                    <div
                      key={payout.id}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          ${payout.amount.toFixed(2)}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>{new Date(payout.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{payout.method}</span>
                          <span>•</span>
                          <span>{payout.referrals} referrals</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payout.status)}`}>
                        {payout.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Gift className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">
                      Next Payout: March 1, 2025
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Estimated amount: ${stats.thisMonth.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Marketing Materials
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {marketingMaterials.map((material) => (
                    <div
                      key={material.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {material.title}
                          </h4>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
                            {material.type}
                          </span>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700">
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {material.description}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {material.downloads} downloads
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AffiliateCenter;