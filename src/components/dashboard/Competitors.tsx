import React from 'react';
import { Users, Lock } from 'lucide-react';
import { useSubscription } from '../../contexts/SubscriptionContext';

const Competitors: React.FC = () => {
  const { canUseFeature } = useSubscription();
  const hasAccess = canUseFeature('competitor-analysis');

  if (!hasAccess) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Competitor Analysis
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Analyze your competitors and market positioning
          </p>
        </div>

        <div className="min-h-96 flex items-center justify-center">
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 border border-gray-200 dark:border-gray-700">
            <Lock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Pro Feature
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Competitor analysis tools are available with our Pro plan. Upgrade to access 
              detailed competitor insights and market positioning analysis.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Competitor Analysis
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Analyze your competitors and understand your market position
        </p>
      </div>

      {/* Coming Soon Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 text-center">
        <Users className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Competitor Analysis Tools
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Advanced competitor analysis features are coming soon. Stay tuned for comprehensive tools to analyze your competition and market positioning.
        </p>
      </div>
    </div>
  );
};

export default Competitors;