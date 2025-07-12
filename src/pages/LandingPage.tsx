import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  TrendingUp,
  Shield,
  FileText,
  Eye,
  MessageSquare,
  UserPlus,
  Search,
  Calculator,
  Play,
  ChevronDown,
  Plus,
  Minus
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: 'General Business Analysis',
      description: 'Comprehensive AI-powered analysis of your business performance and opportunities'
    },
    {
      icon: Users,
      title: 'Competitor Analysis',
      description: 'Deep insights into your competition and market positioning strategies'
    },
    {
      icon: DollarSign,
      title: 'Financial Insights',
      description: 'Advanced financial analysis and forecasting with AI-driven recommendations'
    },
    {
      icon: Search,
      title: 'Loophole & Opportunity Detection',
      description: 'Discover hidden opportunities and market gaps your competitors missed'
    },
    {
      icon: Target,
      title: 'AI Strategy Planning',
      description: 'Automated strategic planning with actionable roadmaps for growth'
    },
    {
      icon: CheckCircle,
      title: 'Automated Action Plans',
      description: 'Step-by-step action plans generated automatically from your analysis'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Monitoring (Pro)',
      description: 'Continuous monitoring of your business metrics and market changes'
    },
    {
      icon: Shield,
      title: 'Business Management Tools',
      description: 'Complete suite of tools to manage and optimize your business operations'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      content: 'Zyntify saved me 10+ hours per week on business analysis. The AI insights are incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'SME Owner',
      content: 'Finally, a tool that speaks my language. No technical jargon, just actionable advice.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Coach',
      content: 'I use Zyntify with all my clients. The strategic recommendations are spot-on.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How does the Free plan work?',
      answer: 'The Free plan gives you access to 1 business profile with limited features. You can see previews of all our tools but with upgrade prompts. Perfect for getting started and testing our platform.'
    },
    {
      question: "What's limited on Free?",
      answer: 'Free users get basic analysis features, limited integrations, and can only manage 1 business. Pro features like advanced competitor analysis, unlimited businesses, and full integrations require an upgrade.'
    },
    {
      question: 'Can I really cancel add-ons any time?',
      answer: 'Yes! All add-ons can be cancelled at any time with no penalties. You only pay for what you use, when you use it.'
    },
    {
      question: 'How fast is analysis?',
      answer: 'Most analyses complete within 2-5 minutes. Complex reports may take up to 10 minutes depending on the depth of analysis requested.'
    },
    {
      question: 'How does affiliate commission get paid?',
      answer: 'Commissions are paid monthly via PayPal or bank transfer. You earn as long as your referrals remain active customers.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption and security measures. Your business data is never shared and is stored securely in compliance with international data protection standards.'
    }
  ];

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 floating">
              Empower Your Business With AI –
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Analyze, Strategize, and Grow</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
              AI-powered business analyzer and strategist for entrepreneurs, SMEs, and startups worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Watch Zyntify in Action
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      See how easy it is to analyze your business in minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button below video */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link
                to="/register"
                className="gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 glow-hover"
              >
                <span>Start Free</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Are you tired of guesswork in business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Zyntify uses AI to instantly analyze your business, find opportunities, track competitors, 
            and build step-by-step strategies—all with zero technical skills needed.
          </p>
          <div className="glass-card p-8 rounded-2xl">
            <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
              Form-based. No prompt engineering. Just results.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Fill Simple Form',
                description: 'Enter your business details (name, owner, website, socials, docs)'
              },
              {
                step: '2',
                title: 'Choose Your Plan',
                description: 'Select Free, Pro, or build your own with add-ons'
              },
              {
                step: '3',
                title: 'Get AI Analysis',
                description: 'Receive instant AI-powered analysis, strategy, and action plans'
              },
              {
                step: '4',
                title: 'Scale & Grow',
                description: 'Upgrade or add features as your business grows'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to grow your business
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Powerful AI tools designed for entrepreneurs who want results, not complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 glow-hover"
              >
                <div className="p-3 rounded-xl gradient-primary w-fit mb-4 shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by entrepreneurs worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden">
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 lg:px-8 py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of entrepreneurs who are already using AI to grow their businesses.
          </p>
          
          <Link
            to="/register"
            className="bg-white/90 text-primary-600 hover:bg-white hover:shadow-2xl px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 glow-hover"
          >
            <span>Start Your Free Trial</span>
            <Zap className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;