import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  DollarSign, 
  Users, 
  BarChart3, 
  ArrowRight,
  Check,
  Calculator,
  TrendingUp,
  Video,
  MessageSquare,
  BookOpen,
  Briefcase,
  Target,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Affiliate: React.FC = () => {
  const [proUsers, setProUsers] = useState(50);
  const [addOnsPerUser, setAddOnsPerUser] = useState(2);
  const [marketRequests, setMarketRequests] = useState(10);

  const calculateEarnings = () => {
    const proEarnings = proUsers * 2;
    const addOnEarnings = proUsers * addOnsPerUser * 1;
    const marketEarnings = marketRequests * 1;
    const total = proEarnings + addOnEarnings + marketEarnings;
    
    return {
      proEarnings,
      addOnEarnings,
      marketEarnings,
      total
    };
  };

  const earnings = calculateEarnings();

  const targetAudiences = [
    {
      icon: Video,
      title: 'YouTubers',
      description: 'Content creators focused on business, entrepreneurship, and productivity'
    },
    {
      icon: Users,
      title: 'Streamers',
      description: 'Live streamers who discuss business topics and startup journeys'
    },
    {
      icon: BookOpen,
      title: 'Business Bloggers',
      description: 'Writers and bloggers covering business strategy and growth topics'
    },
    {
      icon: Briefcase,
      title: 'SME Coaches & Consultants',
      description: 'Business coaches and consultants helping small and medium enterprises'
    },
    {
      icon: Target,
      title: 'Startup Communities',
      description: 'Community leaders and influencers in the startup ecosystem'
    }
  ];

  const benefits = [
    'Up to $2/month recurring per Pro business referred',
    '$1/month on every add-on referred',
    '$1 per market/document request',
    'Earnings last as long as the customer stays',
    'Real-time dashboard and payout tracking',
    'Dedicated affiliate manager support',
    'Marketing materials and resources provided',
    'Monthly payouts via PayPal or bank transfer'
  ];

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      <div className="px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Affiliate/Creator Partner Program
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-primary-600 mb-8">
            Earn Recurring Revenue Promoting Zyntify!
          </h2>
          
          {/* Key Benefits */}
          <div className="glass-card rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">$2/month</div>
                <div className="text-gray-600 dark:text-gray-300">per Pro business referred</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">$1/month</div>
                <div className="text-gray-600 dark:text-gray-300">on every add-on referred</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">$1</div>
                <div className="text-gray-600 dark:text-gray-300">per market/doc request</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Earnings last as long as the customer stays</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Real-time dashboard and payout</span>
              </div>
            </div>
          </div>

          <Link
            to="/affiliate-register"
            className="gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 glow-hover"
          >
            <span>Start Earning as an Affiliate</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Perfect For Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Perfect for:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudiences.map((audience, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl gradient-primary w-fit mx-auto mb-4 shadow-lg">
                  <audience.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Affiliate Calculator
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how much you could earn!
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-8">
              {/* Input Fields */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
                    Estimated active Pro users?
                  </label>
                  <input
                    type="number"
                    value={proUsers}
                    onChange={(e) => setProUsers(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-6 py-4 text-2xl font-bold text-center border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
                    Estimated average add-ons per user?
                  </label>
                  <input
                    type="number"
                    value={addOnsPerUser}
                    onChange={(e) => setAddOnsPerUser(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-6 py-4 text-2xl font-bold text-center border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                    min="0"
                  />
                </div>
              </div>

              <div className="max-w-md mx-auto">
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
                  Market/Document requests per month (optional)
                </label>
                <input
                  type="number"
                  value={marketRequests}
                  onChange={(e) => setMarketRequests(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-6 py-4 text-2xl font-bold text-center border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                  min="0"
                />
              </div>

              {/* Formula Display */}
              <div className="text-center py-6 border-t border-b border-white/10 dark:border-gray-700/30">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Your Monthly Earnings Formula:
                </h3>
                <div className="text-lg text-gray-700 dark:text-gray-300 font-mono">
                  = ({proUsers} Pro users × $2) + ({proUsers} Pro users × {addOnsPerUser} add-ons × $1) + ({marketRequests} requests × $1)
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  Example Output:
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 glass rounded-xl">
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      {proUsers} Pro users × $2
                    </span>
                    <span className="text-xl font-bold text-green-600">
                      ${earnings.proEarnings}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 glass rounded-xl">
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      {proUsers} Pro users × {addOnsPerUser} add-ons × $1
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      ${earnings.addOnEarnings}
                    </span>
                  </div>

                  {marketRequests > 0 && (
                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        {marketRequests} market/doc requests × $1
                      </span>
                      <span className="text-xl font-bold text-purple-600">
                        ${earnings.marketEarnings}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-6 gradient-primary rounded-xl text-white">
                    <span className="text-xl font-semibold">
                      Total Monthly Commission:
                    </span>
                    <span className="text-3xl font-bold">
                      ${earnings.total}
                    </span>
                  </div>
                </div>

                {marketRequests === 0 && (
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30 rounded-xl">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">
                      <Zap className="h-5 w-5 inline mr-2" />
                      Bonus: Add Market/Document requests for extra earnings!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Program Benefits */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Program Benefits
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How it works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Join the Program
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sign up for free and get your unique referral link and marketing materials
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 dark:bg-secondary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Share & Promote
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your link through your content, social media, or directly with your audience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 dark:bg-accent-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Earn Recurring Revenue
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn monthly commissions as long as your referrals remain active customers
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to start earning recurring revenue?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join our affiliate program today and turn your audience into a sustainable income stream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/affiliate-register"
              className="gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 glow-hover"
            >
              <span>Start Earning Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="glass border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Affiliate;