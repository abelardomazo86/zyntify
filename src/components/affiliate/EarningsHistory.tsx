import React, { useState } from 'react';
import { 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Download,
  Filter,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const EarningsHistory: React.FC = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [selectedPeriod, setSelectedPeriod] = useState('last-30-days');

  const dailyEarnings = [
    { date: '2025-02-10', amount: 24.00, type: 'Commission', referrals: 2, description: '2 Pro subscriptions' },
    { date: '2025-02-09', amount: 0.00, type: 'Commission', referrals: 0, description: 'No conversions' },
    { date: '2025-02-08', amount: 12.00, type: 'Commission', referrals: 1, description: '1 Pro subscription' },
    { date: '2025-02-07', amount: 200.00, type: 'Bonus', referrals: 1, description: '3-month retention bonus' },
    { date: '2025-02-06', amount: 36.00, type: 'Commission', referrals: 3, description: '3 Pro subscriptions' },
    { date: '2025-02-05', amount: 12.00, type: 'Commission', referrals: 1, description: '1 Pro subscription' },
    { date: '2025-02-04', amount: 0.00, type: 'Commission', referrals: 0, description: 'No conversions' },
  ];

  const weeklyEarnings = [
    { period: 'Feb 3-9, 2025', amount: 284.00, commissions: 72.00, bonuses: 212.00, referrals: 6 },
    { period: 'Jan 27-Feb 2, 2025', amount: 156.00, commissions: 156.00, bonuses: 0.00, referrals: 13 },
    { period: 'Jan 20-26, 2025', amount: 324.00, commissions: 124.00, bonuses: 200.00, referrals: 10 },
    { period: 'Jan 13-19, 2025', amount: 96.00, commissions: 96.00, bonuses: 0.00, referrals: 8 },
  ];

  const monthlyEarnings = [
    { month: 'February 2025', amount: 680.00, commissions: 480.00, bonuses: 200.00, referrals: 18, growth: '+45%' },
    { month: 'January 2025', amount: 468.00, commissions: 268.00, bonuses: 200.00, referrals: 22, growth: '+23%' },
    { month: 'December 2024', amount: 380.00, commissions: 380.00, bonuses: 0.00, referrals: 31, growth: '+12%' },
    { month: 'November 2024', amount: 340.00, commissions: 340.00, bonuses: 0.00, referrals: 28, growth: '+8%' },
  ];

  const summaryStats = {
    totalEarnings: 2450.00,
    thisMonth: 680.00,
    lastMonth: 468.00,
    avgMonthly: 408.33,
    totalReferrals: 124,
    activeReferrals: 89,
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Bonus':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
      case 'Commission':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Earnings History
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Track your affiliate earnings and performance over time
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 glass border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
          >
            <option value="last-7-days">Last 7 days</option>
            <option value="last-30-days">Last 30 days</option>
            <option value="last-90-days">Last 90 days</option>
            <option value="this-year">This year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-200">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ${summaryStats.totalEarnings.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Earnings</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ${summaryStats.thisMonth.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">This Month</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ${summaryStats.avgMonthly.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Avg Monthly</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {summaryStats.totalReferrals}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Referrals</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {summaryStats.activeReferrals}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Active</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <ArrowUpRight className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">
                +45%
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          {[
            { id: 'daily', label: 'Daily' },
            { id: 'weekly', label: 'Weekly' },
            { id: 'monthly', label: 'Monthly' },
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
          {activeTab === 'daily' && (
            <div className="space-y-4">
              {dailyEarnings.map((earning, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {new Date(earning.date).getDate()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(earning.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="text-xl font-bold text-gray-900 dark:text-white">
                            ${earning.amount.toFixed(2)}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(earning.type)}`}>
                            {earning.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {earning.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {earning.referrals}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        referrals
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'weekly' && (
            <div className="space-y-4">
              {weeklyEarnings.map((week, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {week.period}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {week.referrals} referrals this week
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${week.amount.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Commissions:</span>
                      <p className="font-semibold text-green-600">${week.commissions.toFixed(2)}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Bonuses:</span>
                      <p className="font-semibold text-yellow-600">${week.bonuses.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'monthly' && (
            <div className="space-y-4">
              {monthlyEarnings.map((month, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {month.month}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {month.referrals} referrals this month
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${month.amount.toFixed(2)}
                        </span>
                        <span className="text-green-600 text-sm font-medium">
                          {month.growth}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Commissions:</span>
                      <p className="font-semibold text-green-600">${month.commissions.toFixed(2)}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Bonuses:</span>
                      <p className="font-semibold text-yellow-600">${month.bonuses.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarningsHistory;