import React from 'react';
import { CreditCard, Download, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { useSubscription } from '../../contexts/SubscriptionContext';

const Billing: React.FC = () => {
  const { subscription, upgradeToPro, cancelSubscription } = useSubscription();

  const invoices = [
    {
      id: 'INV-2025-002',
      date: '2025-02-01',
      amount: '$12.00',
      status: 'paid',
      description: 'Pro Plan - February 2025',
    },
    {
      id: 'INV-2025-001',
      date: '2025-01-01',
      amount: '$12.00',
      status: 'paid',
      description: 'Pro Plan - January 2025',
    },
    {
      id: 'INV-2024-012',
      date: '2024-12-01',
      amount: '$12.00',
      status: 'paid',
      description: 'Pro Plan - December 2024',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Billing & Subscription
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage your subscription and billing information
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Current Plan
          </h2>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            subscription.plan === 'pro' 
              ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            {subscription.plan === 'pro' ? 'Pro Plan' : 'Free Plan'}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Plan Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plan</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {subscription.plan === 'pro' ? 'Pro' : 'Free'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Price</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {subscription.plan === 'pro' ? '$12/month' : '$0'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Status</span>
                <span className={`font-medium ${
                  subscription.status === 'active' 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {subscription.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Businesses</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {subscription.plan === 'pro' ? 'Unlimited' : '1'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Analyses</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {subscription.plan === 'pro' ? 'Unlimited' : `${subscription.analysesLimit}/month`}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Actions
            </h3>
            <div className="space-y-3">
              {subscription.plan === 'free' ? (
                <button
                  onClick={upgradeToPro}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Upgrade to Pro
                </button>
              ) : (
                <div className="space-y-3">
                  <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                    Update Payment Method
                  </button>
                  <button
                    onClick={cancelSubscription}
                    className="w-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 py-2 px-4 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200"
                  >
                    Cancel Subscription
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Payment Method
          </h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            Update
          </button>
        </div>

        {subscription.plan === 'pro' ? (
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <CreditCard className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-medium">
                •••• •••• •••• 4242
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Expires 12/2027
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No payment method required for free plan
            </p>
          </div>
        )}
      </div>

      {/* Billing History */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Billing History
          </h2>
        </div>

        {subscription.plan === 'pro' ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    invoice.status === 'paid' 
                      ? 'bg-green-100 dark:bg-green-900' 
                      : 'bg-red-100 dark:bg-red-900'
                  }`}>
                    {invoice.status === 'paid' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {invoice.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{invoice.id}</span>
                      <span>•</span>
                      <span>{new Date(invoice.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {invoice.amount}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No billing history available for free plan
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billing;