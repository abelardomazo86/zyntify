import React, { useState } from 'react';
import { 
  Search, 
  Book, 
  MessageCircle, 
  FileText, 
  Video,
  ChevronRight,
  Star,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of Zyntify',
      icon: '🚀',
      articles: 8,
    },
    {
      id: 'analysis',
      title: 'AI Analysis',
      description: 'Understanding your business analysis results',
      icon: '🧠',
      articles: 12,
    },
    {
      id: 'billing',
      title: 'Billing & Subscriptions',
      description: 'Manage your account and payments',
      icon: '💳',
      articles: 6,
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Connect your tools and platforms',
      icon: '🔗',
      articles: 10,
    },
    {
      id: 'team',
      title: 'Team Management',
      description: 'Collaborate with your team',
      icon: '👥',
      articles: 5,
    },
    {
      id: 'api',
      title: 'API & Developers',
      description: 'Technical documentation and guides',
      icon: '⚡',
      articles: 15,
    },
  ];

  const popularArticles = [
    {
      id: '1',
      title: 'How to run your first AI analysis',
      category: 'Getting Started',
      views: 1250,
      rating: 4.8,
    },
    {
      id: '2',
      title: 'Understanding your business health score',
      category: 'AI Analysis',
      views: 980,
      rating: 4.9,
    },
    {
      id: '3',
      title: 'Setting up team permissions',
      category: 'Team Management',
      views: 756,
      rating: 4.7,
    },
    {
      id: '4',
      title: 'Connecting Google Analytics',
      category: 'Integrations',
      views: 642,
      rating: 4.6,
    },
    {
      id: '5',
      title: 'Upgrading to Pro plan',
      category: 'Billing',
      views: 534,
      rating: 4.8,
    },
  ];

  const tutorials = [
    {
      id: '1',
      title: 'Complete Onboarding Walkthrough',
      duration: '8:32',
      thumbnail: '🎬',
      description: 'Step-by-step guide to setting up your first business profile',
    },
    {
      id: '2',
      title: 'Advanced Analysis Features',
      duration: '12:45',
      thumbnail: '📊',
      description: 'Deep dive into competitor analysis and market insights',
    },
    {
      id: '3',
      title: 'Team Collaboration Best Practices',
      duration: '6:18',
      thumbnail: '👥',
      description: 'How to effectively collaborate with your team members',
    },
    {
      id: '4',
      title: 'API Integration Tutorial',
      duration: '15:22',
      thumbnail: '⚡',
      description: 'Building custom integrations with Zyntify API',
    },
  ];

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      <div className="px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <HelpCircle className="h-16 w-16 text-primary-600 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Find answers, get support, and learn how to make the most of Zyntify
          </p>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help articles..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white text-lg"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Browse by Category
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 glow-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{category.icon}</div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {category.description}
                </p>
                <p className="text-primary-600 text-sm font-medium">
                  {category.articles} articles
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Articles
            </h2>
          </div>
          <div className="space-y-4">
            {popularArticles.map((article) => (
              <div
                key={article.id}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.views} views</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{article.rating}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Video Tutorials
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 h-48 flex items-center justify-center">
                  <div className="text-6xl">{tutorial.thumbnail}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {tutorial.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tutorial.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12">
          <MessageCircle className="h-16 w-16 text-primary-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still need help?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our support team is here to help you succeed with Zyntify
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 glow-hover"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contact Support</span>
            </a>
            <a
              href="mailto:support@zyntify.com"
              className="glass border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;