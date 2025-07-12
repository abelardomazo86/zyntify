import React, { useState } from 'react';
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  CheckCircle,
  AlertCircle,
  Clock,
  Download,
  Settings
} from 'lucide-react';

const RequestPayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('request');
  const [payoutMethod, setPayoutMethod] = useState('paypal');
  const [payoutAmount, setPayoutAmount] = useState('680.00');

  const payoutRequirements = {
    minimumPayout: 50.00,
    availableBalance: 680.00,
    pendingBalance: 0.00,
    nextPayoutDate: '2025-03-01',
    processingTime: '3-5 business days',
  };

  const payoutHistory = [
    {
      id: '1',
      amount: 360.00,
      date: '2025-02-01',
      status: 'Completed',
      method: 'PayPal',
      transactionId: 'TXN-2025-001',
      processedDate: '2025-02-03',
    },
    {
      id: '2',
      amount: 480.00,
      date: '2025-01-01',
      status: 'Completed',
      method: 'Bank Transfer',
      transactionId: 'TXN-2025-002',
      processedDate: '2025-01-05',
    },
    {
      id: '3',
      amount: 240.00,
      date: '2024-12-01',
      status: 'Completed',
      method: 'PayPal',
      transactionId: 'TXN-2024-012',
      processedDate: '2024-12-04',
    },
    {
      id: '4',
      amount: 320.00,
      date: '2024-11-01',
      status: 'Completed',
      method: 'PayPal',
      transactionId: 'TXN-2024-011',
      processedDate: '2024-11-03',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      case 'Processing':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
      case 'Pending':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900';
      case 'Failed':
        return 'text-red-600 bg-red-100 dark:bg-red-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  const handleRequestPayout = () => {
    // Handle payout request
    console.log('Requesting payout:', { amount: payoutAmount, method: payoutMethod });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Request Payout
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Withdraw your affiliate earnings and manage payout settings
        </p>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">
                ${payoutRequirements.availableBalance.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Available Balance</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-600">
                ${payoutRequirements.pendingBalance.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pending Balance</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ${payoutRequirements.minimumPayout.toFixed(2)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Minimum Payout</p>
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
                Mar 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Next Auto Payout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          {[
            { id: 'request', label: 'Request Payout' },
            { id: 'settings', label: 'Payout Settings' },
            { id: 'history', label: 'Payout History' },
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
          {activeTab === 'request' && (
            <div className="space-y-6">
              {/* Payout Requirements */}
              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Payout Requirements
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Minimum balance: ${payoutRequirements.minimumPayout.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Processing time: {payoutRequirements.processingTime}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Valid payout method configured
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Account in good standing
                    </span>
                  </div>
                </div>
              </div>

              {/* Payout Form */}
              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Request Manual Payout
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Payout Amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        value={payoutAmount}
                        onChange={(e) => setPayoutAmount(e.target.value)}
                        max={payoutRequirements.availableBalance}
                        min={payoutRequirements.minimumPayout}
                        step="0.01"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Maximum available: ${payoutRequirements.availableBalance.toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Payout Method
                    </label>
                    <select
                      value={payoutMethod}
                      onChange={(e) => setPayoutMethod(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                    >
                      <option value="paypal">PayPal (affiliate@example.com)</option>
                      <option value="bank">Bank Transfer (****1234)</option>
                    </select>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800 dark:text-blue-200">
                        <p className="font-medium mb-1">Processing Information</p>
                        <p>Manual payouts are processed within {payoutRequirements.processingTime}. You'll receive an email confirmation once the payout is initiated.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleRequestPayout}
                    disabled={parseFloat(payoutAmount) < payoutRequirements.minimumPayout || parseFloat(payoutAmount) > payoutRequirements.availableBalance}
                    className="w-full gradient-primary hover:shadow-2xl disabled:opacity-50 text-white py-3 rounded-xl font-semibold transition-all duration-200 glow-hover"
                  >
                    Request Payout of ${parseFloat(payoutAmount).toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Automatic Payout Settings
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Enable Automatic Payouts
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Automatically request payouts when balance reaches threshold
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Automatic Payout Threshold
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white">
                      <option value="100">$100.00</option>
                      <option value="250">$250.00</option>
                      <option value="500" selected>$500.00</option>
                      <option value="1000">$1,000.00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Payout Schedule
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white">
                      <option value="monthly" selected>Monthly (1st of each month)</option>
                      <option value="bi-weekly">Bi-weekly (1st and 15th)</option>
                      <option value="weekly">Weekly (Every Monday)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Payout Methods
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">PayPal</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">affiliate@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs font-medium">
                        Primary
                      </span>
                      <button className="text-primary-600 hover:text-primary-700 text-sm">
                        Edit
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Bank Transfer</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">****1234</p>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm">
                      Edit
                    </button>
                  </div>

                  <button className="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-gray-600 dark:text-gray-400 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    + Add New Payout Method
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              {payoutHistory.map((payout) => (
                <div
                  key={payout.id}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl gradient-primary shadow-lg">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="text-xl font-bold text-gray-900 dark:text-white">
                            ${payout.amount.toFixed(2)}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payout.status)}`}>
                            {payout.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>Requested: {new Date(payout.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>Method: {payout.method}</span>
                          <span>•</span>
                          <span>ID: {payout.transactionId}</span>
                        </div>
                        {payout.processedDate && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Processed: {new Date(payout.processedDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                      <Download className="h-5 w-5" />
                    </button>
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

export default RequestPayout;