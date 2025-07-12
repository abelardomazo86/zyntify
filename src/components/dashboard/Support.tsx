import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageCircle, 
  Book, 
  Video, 
  FileText, 
  Search,
  ExternalLink,
  ChevronRight,
  Star,
  Send,
  Paperclip
} from 'lucide-react';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('help');
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');

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
      description: 'Building custom integrations with Biztologist API',
    },
  ];

  const announcements = [
    {
      id: '1',
      title: 'New AI Analysis Features Released',
      date: '2025-02-10',
      type: 'Feature',
      content: 'We\'ve added new competitor tracking and market opportunity analysis features.',
    },
    {
      id: '2',
      title: 'Scheduled Maintenance - February 15',
      date: '2025-02-08',
      type: 'Maintenance',
      content: 'Brief maintenance window scheduled for system upgrades.',
    },
    {
      id: '3',
      title: 'API Rate Limits Update',
      date: '2025-02-05',
      type: 'API',
      content: 'Updated rate limits for better performance and reliability.',
    },
  ];

  const chatHistory = [
    {
      id: '1',
      type: 'support',
      message: 'Hello! How can I help you today?',
      timestamp: '10:30 AM',
    },
    {
      id: '2',
      type: 'user',
      message: 'I\'m having trouble understanding my analysis results.',
      timestamp: '10:32 AM',
    },
    {
      id: '3',
      type: 'support',
      message: 'I\'d be happy to help explain your analysis results. Could you tell me which specific part you\'re having trouble with?',
      timestamp: '10:33 AM',
    },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle sending message
      setChatMessage('');
    }
  };

  const getAnnouncementColor = (type: string) => {
    switch (type) {
      case 'Feature':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      case 'Maintenance':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
      case 'API':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Support & Resources
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Get help, learn new features, and stay updated
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {[
            { id: 'help', label: 'Help Center', icon: HelpCircle },
            { id: 'chat', label: 'Live Chat', icon: MessageCircle },
            { id: 'tutorials', label: 'Tutorials', icon: Video },
            { id: 'resources', label: 'Resources', icon: Book },
            { id: 'announcements', label: 'Announcements', icon: FileText },
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
          {activeTab === 'help' && (
            <div className="space-y-8">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search help articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Help Categories */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Browse by Category
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {helpCategories.map((category) => (
                    <div
                      key={category.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Popular Articles
                </h2>
                <div className="space-y-4">
                  {popularArticles.map((article) => (
                    <div
                      key={article.id}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                    >
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
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Live Chat Support
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our support team is available Monday-Friday, 9 AM - 6 PM PST
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {chatHistory.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors duration-200"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tutorials' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Video Tutorials
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tutorials.map((tutorial) => (
                    <div
                      key={tutorial.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    >
                      <div className="bg-gray-100 dark:bg-gray-700 h-48 flex items-center justify-center">
                        <div className="text-6xl">{tutorial.thumbnail}</div>
                      </div>
                      <div className="p-4">
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
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Resource Library
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <Book className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      User Guide
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Comprehensive guide to all Zyntify features
                    </p>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Download PDF
                    </button>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <FileText className="h-8 w-8 text-secondary-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      API Documentation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Technical documentation for developers
                    </p>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View Docs
                    </button>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <Video className="h-8 w-8 text-accent-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Webinar Recordings
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Past webinars and training sessions
                    </p>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'announcements' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Latest Announcements
                </h2>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {announcement.title}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {new Date(announcement.date).toLocaleDateString()}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAnnouncementColor(announcement.type)}`}>
                          {announcement.type}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {announcement.content}
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

export default Support;