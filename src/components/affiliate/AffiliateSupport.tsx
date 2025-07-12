import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageCircle, 
  Send,
  ChevronDown,
  Plus,
  Minus,
  Star,
  Lightbulb,
  FileText
} from 'lucide-react';

const AffiliateSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ticketMessage, setTicketMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const affiliateFaqs = [
    {
      question: 'How much commission do I earn per referral?',
      answer: 'You earn 30% recurring commission on every Pro subscription ($12/month), which equals $3.60 per month per active referral. Additionally, you get a $200 bonus for each referral that stays active for 3 months.',
    },
    {
      question: 'When do I get paid?',
      answer: 'Commissions are paid monthly on the 1st of each month via your chosen payout method (PayPal or bank transfer). You can also request manual payouts anytime your balance exceeds $50.',
    },
    {
      question: 'How long do cookies last?',
      answer: 'Our affiliate cookies last for 24 hours. This means if someone clicks your link and signs up within 24 hours, you\'ll get credit for the referral.',
    },
    {
      question: 'What marketing materials are available?',
      answer: 'We provide banners in various sizes (728x90, 300x300, 160x600, 320x50), email templates, social media graphics, and product demo videos. All materials include your unique tracking code.',
    },
    {
      question: 'Can I promote Zyntify on social media?',
      answer: 'Yes! You can promote Zyntify on all social media platforms. We provide social media graphics and suggested post templates to help you get started.',
    },
    {
      question: 'Is there a minimum payout threshold?',
      answer: 'Yes, the minimum payout is $50. Once your balance reaches $50, you can request a manual payout or wait for the automatic monthly payout.',
    },
    {
      question: 'How do I track my referrals and earnings?',
      answer: 'Your affiliate dashboard provides real-time tracking of clicks, conversions, earnings, and detailed analytics. You can see which links perform best and track your progress.',
    },
    {
      question: 'What happens if a customer cancels their subscription?',
      answer: 'If a customer cancels their subscription, you will no longer receive recurring commissions for that customer. However, any commissions already earned remain yours.',
    },
    {
      question: 'Can I refer myself or family members?',
      answer: 'Self-referrals are not allowed. Referring family members is permitted as long as they are genuine customers who will use the service.',
    },
    {
      question: 'How do I get the $200 retention bonus?',
      answer: 'The $200 bonus is automatically credited to your account when a referral maintains their Pro subscription for 3 consecutive months. No action is required on your part.',
    },
  ];

  const supportTickets = [
    {
      id: '1',
      subject: 'Question about commission calculation',
      status: 'Open',
      date: '2025-02-10',
      lastReply: '2025-02-10',
    },
    {
      id: '2',
      subject: 'Request for custom banner size',
      status: 'Resolved',
      date: '2025-02-08',
      lastReply: '2025-02-09',
    },
  ];

  const handleSubmitTicket = () => {
    if (ticketMessage.trim()) {
      // Handle ticket submission
      setTicketMessage('');
      console.log('Support ticket submitted');
    }
  };

  const handleSubmitFeedback = () => {
    if (feedbackMessage.trim()) {
      // Handle feedback submission
      setFeedbackMessage('');
      console.log('Feedback submitted');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Affiliate Support
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Get help with your affiliate account and share your feedback
        </p>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          {[
            { id: 'faq', label: 'FAQ', icon: HelpCircle },
            { id: 'tickets', label: 'Support Tickets', icon: MessageCircle },
            { id: 'feedback', label: 'Feature Requests', icon: Lightbulb },
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
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Find answers to common questions about the Zyntify affiliate program
                </p>
              </div>

              <div className="space-y-4">
                {affiliateFaqs.map((faq, index) => (
                  <div key={index} className="glass rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/30">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 dark:hover:bg-gray-700/30 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                      {openFaq === index ? (
                        <Minus className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Can't find what you're looking for? Our affiliate support team is here to help.
                </p>
                <button
                  onClick={() => setActiveTab('tickets')}
                  className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 glow-hover"
                >
                  Contact Support
                </button>
              </div>
            </div>
          )}

          {activeTab === 'tickets' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Support Tickets
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get personalized help from our affiliate support team
                </p>
              </div>

              {/* Create New Ticket */}
              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Create New Support Ticket
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white">
                      <option value="">Select a category</option>
                      <option value="commission">Commission Questions</option>
                      <option value="payout">Payout Issues</option>
                      <option value="tracking">Tracking Problems</option>
                      <option value="materials">Marketing Materials</option>
                      <option value="technical">Technical Issues</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      placeholder="Describe your issue in detail..."
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmitTicket}
                    className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 glow-hover"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Ticket</span>
                  </button>
                </div>
              </div>

              {/* Existing Tickets */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Your Support Tickets
                </h3>
                
                {supportTickets.length > 0 ? (
                  <div className="space-y-4">
                    {supportTickets.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {ticket.subject}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                              <span>Created: {new Date(ticket.date).toLocaleDateString()}</span>
                              <span>•</span>
                              <span>Last reply: {new Date(ticket.lastReply).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              ticket.status === 'Open' 
                                ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                                : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                            }`}>
                              {ticket.status}
                            </span>
                            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      No support tickets yet. Create one above if you need help.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Feature Requests & Feedback
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Help us improve the affiliate program by sharing your ideas and feedback
                </p>
              </div>

              {/* Submit Feedback */}
              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Share Your Ideas
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white">
                      <option value="feature">Feature Request</option>
                      <option value="improvement">Improvement Suggestion</option>
                      <option value="feedback">General Feedback</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      placeholder="Brief title for your suggestion"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={feedbackMessage}
                      onChange={(e) => setFeedbackMessage(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                      placeholder="Describe your idea or feedback in detail..."
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmitFeedback}
                    className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 glow-hover"
                  >
                    <Lightbulb className="h-4 w-4" />
                    <span>Submit Feedback</span>
                  </button>
                </div>
              </div>

              {/* Popular Requests */}
              <div className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Popular Feature Requests
                </h3>
                
                <div className="space-y-4">
                  {[
                    { title: 'Mobile app for affiliate tracking', votes: 23, status: 'Under Review' },
                    { title: 'Custom commission rates for high performers', votes: 18, status: 'Planned' },
                    { title: 'Advanced analytics dashboard', votes: 15, status: 'In Development' },
                    { title: 'Automated social media posting tools', votes: 12, status: 'Under Review' },
                  ].map((request, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 glass rounded-xl border border-white/10 dark:border-gray-700/20"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {request.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {request.votes} votes
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          request.status === 'In Development' 
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                            : request.status === 'Planned'
                            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                            : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                        }`}>
                          {request.status}
                        </span>
                        <button className="text-primary-600 hover:text-primary-700">
                          <Star className="h-4 w-4" />
                        </button>
                      </div>
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

export default AffiliateSupport;