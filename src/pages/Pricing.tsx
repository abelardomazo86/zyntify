import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Crown, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '1 Business',
        'Limited AI General Analysis',
        'Limited AI Competitor Analysis',
        'Limited AI Financial Analysis',
        'Limited AI Loophole Analysis',
        'Limited AI Strategy Analysis',
        'Limited AI Action Plans',
      ],
      buttonText: 'Start Free',
      buttonVariant: 'outline',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$12',
      period: 'per business/month',
      description: 'Everything you need to grow',
      features: [
        'Full AI General Analysis',
        'Full AI Competitor Analysis',
        'Full AI Financial Analysis',
        'Full AI Loophole Analysis',
        'Full AI Strategy Analysis',
        'Full AI Action Plans',
        'Full Integration (Google Sheets, QuickBooks, or Xero)',
        'Full Access on Business Tools',
        'Ongoing Action Plans Monitoring',
        'Business Management',
      ],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'primary',
      popular: true,
    },
  ];

  const addOns = [
    {
      name: 'AI Opportunity Detection',
      price: '$8',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'AI Threat Detection',
      price: '$8',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'AI Loophole Detection',
      price: '$8',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'AI SWOT Assistant',
      price: '$6',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'AI Competitor Watcher',
      price: '$6',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'AI Follow Up',
      price: '$6',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'Collaboration',
      price: '$6',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'Task Assignment & Mgmt',
      price: '$6',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'CRM Integration',
      price: '$6',
      period: '/business/mo',
      description: 'Use on existing analyzed business',
      category: 'Monthly Add-ons',
    },
    {
      name: 'Market Opportunity Finder',
      price: '$4',
      period: '/request',
      description: 'Charged per request',
      category: 'Pay-per-use',
    },
    {
      name: 'Document Analysis',
      price: '$4',
      period: '/document',
      description: 'Charged per request',
      category: 'Pay-per-use',
    },
  ];

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      <div className="px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Package & Pricing Structure
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that's right for your business. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`
                  relative glass-card rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300
                  ${plan.popular ? 'ring-2 ring-primary-600 glow' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                      <Crown className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/register"
                  className={`
                    w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center space-x-2
                    ${plan.buttonVariant === 'primary'
                      ? 'gradient-primary hover:shadow-2xl text-white glow-hover'
                      : 'glass border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400'
                    }
                  `}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Add-ons */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pro Add-ons
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A la carte, cancel any time
            </p>
          </div>

          {/* Monthly Add-ons */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Monthly Add-ons
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enhance your business analysis with powerful monthly subscriptions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.filter(addon => addon.category === 'Monthly Add-ons').map((addOn, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {addOn.name}
                    </h4>
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {addOn.price}<span className="text-sm text-gray-500">{addOn.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {addOn.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pay-per-use Add-ons */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Pay-per-use Add-ons
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Flexible solutions charged only when you use them
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start with our free plan and upgrade as your business grows.
          </p>
          <Link
            to="/register"
            className="gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 glow-hover"
          >
            <span>Start Free Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;