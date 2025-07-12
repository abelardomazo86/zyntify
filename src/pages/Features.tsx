import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  DollarSign, 
  Search, 
  Target, 
  CheckCircle,
  ArrowRight,
  Zap,
  Eye,
  Shield,
  MessageSquare,
  FileText,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Calculator,
  Activity,
  Settings,
  Plus,
  Minus
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Features: React.FC = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const proFeatures = [
    {
      icon: Brain,
      title: 'Full AI General Analysis',
      description: 'Comprehensive business performance analysis with deep insights',
      details: [
        'Complete business health assessment with 360-degree view',
        'Performance benchmarking against industry standards',
        'Automated SWOT analysis with strategic recommendations',
        'Market positioning analysis and competitive landscape overview',
        'Growth opportunity identification and risk assessment',
        'Detailed reporting with actionable insights and next steps'
      ]
    },
    {
      icon: Users,
      title: 'Full AI Competitor Analysis',
      description: 'Deep dive into your competitive landscape and market positioning',
      details: [
        'Comprehensive competitor profiling and market share analysis',
        'Pricing strategy comparison and competitive positioning',
        'Product/service feature analysis and gap identification',
        'Marketing strategy assessment and channel analysis',
        'Strengths and weaknesses evaluation with strategic implications',
        'Competitive threat assessment and opportunity mapping'
      ]
    },
    {
      icon: DollarSign,
      title: 'Full AI Financial Analysis',
      description: 'Advanced financial insights and forecasting capabilities',
      details: [
        'Revenue trend analysis and growth pattern identification',
        'Profitability assessment and margin optimization recommendations',
        'Cash flow analysis and working capital management insights',
        'Financial ratio analysis and industry benchmarking',
        'Predictive financial modeling and scenario planning',
        'Investment opportunity evaluation and ROI projections'
      ]
    },
    {
      icon: Search,
      title: 'Full AI Loophole Analysis',
      description: 'Discover hidden opportunities and market gaps',
      details: [
        'Market gap identification and untapped opportunity discovery',
        'Regulatory loophole analysis and compliance optimization',
        'Process inefficiency detection and improvement recommendations',
        'Cost reduction opportunity identification across operations',
        'Revenue leakage analysis and plugging strategies',
        'Competitive advantage discovery through market blind spots'
      ]
    },
    {
      icon: Target,
      title: 'Full AI Strategy Analysis',
      description: 'Comprehensive strategic planning with AI-powered recommendations',
      details: [
        'Strategic goal alignment and priority matrix development',
        'Market entry strategy and expansion planning',
        'Resource allocation optimization and capacity planning',
        'Risk mitigation strategy and contingency planning',
        'Innovation roadmap and technology adoption strategy',
        'Partnership and collaboration opportunity identification'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Full AI Action Plans',
      description: 'Automated actionable roadmaps for business growth',
      details: [
        'Step-by-step implementation roadmaps with timelines',
        'Priority-based task sequencing and dependency mapping',
        'Resource requirement planning and budget allocation',
        'Milestone tracking and progress measurement frameworks',
        'Risk mitigation plans and alternative strategy development',
        'Performance KPI definition and monitoring systems'
      ]
    },
    {
      icon: Settings,
      title: 'Full Integration',
      description: 'Seamless connectivity with your business tools',
      details: [
        'Google Sheets integration for real-time data synchronization',
        'QuickBooks connectivity for financial data analysis',
        'Xero integration for comprehensive accounting insights',
        'Automated data import and export capabilities',
        'Custom API connections for specialized business tools',
        'Real-time dashboard updates and notification systems'
      ]
    },
    {
      icon: BarChart3,
      title: 'Full Access on Business Tools',
      description: 'Complete suite of business management and analysis tools',
      details: [
        'Advanced reporting and analytics dashboard',
        'Custom KPI tracking and performance monitoring',
        'Business process mapping and optimization tools',
        'Team collaboration and project management features',
        'Document management and knowledge base systems',
        'Automated workflow creation and task management'
      ]
    },
    {
      icon: Activity,
      title: 'Ongoing Action Plans Monitoring',
      description: 'Continuous tracking and optimization of your strategic initiatives',
      details: [
        'Real-time progress tracking and milestone monitoring',
        'Automated performance alerts and deviation notifications',
        'Strategy adjustment recommendations based on market changes',
        'ROI tracking and investment performance analysis',
        'Team productivity monitoring and optimization suggestions',
        'Continuous improvement recommendations and best practice updates'
      ]
    },
    {
      icon: Shield,
      title: 'Business Management',
      description: 'Comprehensive business operations and management capabilities',
      details: [
        'Multi-business portfolio management and oversight',
        'Team member access control and permission management',
        'Document storage and version control systems',
        'Compliance tracking and regulatory requirement management',
        'Risk management and mitigation strategy implementation',
        'Performance benchmarking and industry comparison tools'
      ]
    }
  ];

  const aiAddOns = [
    {
      icon: Eye,
      title: 'AI Opportunity Detection',
      price: '$8/business/mo',
      description: 'Advanced AI system that continuously scans for new business opportunities',
      details: [
        'Market trend analysis and emerging opportunity identification',
        'Customer behavior pattern recognition and demand forecasting',
        'Technology disruption monitoring and adaptation strategies',
        'Partnership and collaboration opportunity discovery',
        'New revenue stream identification and validation',
        'Investment opportunity evaluation and risk assessment'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'AI Threat Detection',
      price: '$8/business/mo',
      description: 'Proactive threat identification and risk mitigation system',
      details: [
        'Competitive threat monitoring and early warning systems',
        'Market disruption detection and impact assessment',
        'Financial risk identification and mitigation strategies',
        'Regulatory change monitoring and compliance alerts',
        'Operational risk assessment and contingency planning',
        'Reputation monitoring and crisis management preparation'
      ]
    },
    {
      icon: Search,
      title: 'AI Loophole Detection',
      price: '$8/business/mo',
      description: 'Intelligent system for finding gaps and optimization opportunities',
      details: [
        'Process inefficiency identification and optimization recommendations',
        'Cost reduction opportunity discovery across all operations',
        'Revenue leakage detection and plugging strategies',
        'Compliance gap analysis and remediation planning',
        'Market positioning loophole identification',
        'Competitive advantage discovery through market analysis'
      ]
    },
    {
      icon: Target,
      title: 'AI SWOT Assistant',
      price: '$6/business/mo',
      description: 'Automated SWOT analysis with strategic recommendations',
      details: [
        'Dynamic SWOT matrix generation with real-time updates',
        'Strength amplification strategies and competitive advantage building',
        'Weakness mitigation planning and improvement roadmaps',
        'Opportunity prioritization and resource allocation guidance',
        'Threat response planning and risk mitigation strategies',
        'Strategic action plan generation based on SWOT insights'
      ]
    },
    {
      icon: Users,
      title: 'AI Competitor Watcher',
      price: '$6/business/mo',
      description: 'Continuous competitor monitoring and intelligence gathering',
      details: [
        'Real-time competitor activity tracking and analysis',
        'Pricing strategy monitoring and competitive positioning',
        'Product launch detection and market impact assessment',
        'Marketing campaign analysis and strategy insights',
        'Market share tracking and competitive landscape mapping',
        'Strategic move prediction and response recommendations'
      ]
    },
    {
      icon: Brain,
      title: 'AI Follow Up',
      price: '$6/business/mo',
      description: 'Intelligent follow-up system for continuous business optimization',
      details: [
        'Automated progress tracking and milestone monitoring',
        'Performance deviation alerts and corrective action suggestions',
        'Strategy effectiveness evaluation and optimization recommendations',
        'Goal achievement tracking and success metric analysis',
        'Continuous improvement suggestions based on performance data',
        'Adaptive strategy refinement and course correction guidance'
      ]
    }
  ];

  const regularAddOns = [
    {
      icon: MessageSquare,
      title: 'Collaboration',
      price: '$6/business/mo',
      description: 'Enhanced team collaboration and communication tools',
      details: [
        'Real-time team collaboration workspace with shared dashboards',
        'Advanced permission management and role-based access control',
        'Integrated communication tools and discussion threads',
        'Shared document editing and version control systems',
        'Team performance tracking and productivity analytics',
        'Project coordination tools and milestone management'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Task Assignment & Management',
      price: '$6/business/mo',
      description: 'Comprehensive project and task management system',
      details: [
        'Advanced task creation and assignment workflows',
        'Deadline management and automated reminder systems',
        'Progress tracking and completion status monitoring',
        'Team workload balancing and capacity planning',
        'Performance analytics and productivity insights',
        'Integration with calendar and scheduling systems'
      ]
    },
    {
      icon: Settings,
      title: 'CRM Integration',
      price: '$6/business/mo',
      description: 'Seamless integration with popular CRM platforms',
      details: [
        'Multi-CRM platform connectivity and data synchronization',
        'Customer journey mapping and lifecycle analysis',
        'Sales pipeline integration and performance tracking',
        'Lead scoring and qualification automation',
        'Customer segmentation and targeting optimization',
        'Revenue attribution and ROI tracking across channels'
      ]
    }
  ];

  const payPerUseAddOns = [
    {
      icon: TrendingUp,
      title: 'Market Opportunity Finder',
      price: '$4/request',
      description: 'On-demand market research and opportunity analysis',
      details: [
        'Comprehensive market size estimation and growth projections',
        'Competitive landscape analysis and market positioning',
        'Customer demand validation and market entry strategies',
        'Pricing strategy recommendations and revenue projections',
        'Risk assessment and mitigation planning for new markets',
        'Go-to-market strategy development and launch planning'
      ]
    },
    {
      icon: FileText,
      title: 'Document Analysis',
      price: '$4/document',
      description: 'AI-powered analysis of business documents and reports',
      details: [
        'Automated document parsing and key information extraction',
        'Contract analysis and risk identification',
        'Financial statement analysis and performance insights',
        'Compliance checking and regulatory requirement validation',
        'Competitive intelligence extraction from public documents',
        'Strategic insight generation from business reports and plans'
      ]
    }
  ];

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      <div className="px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Business Growth</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Discover the comprehensive suite of AI-powered tools and features designed to transform your business analysis and strategic planning.
          </p>
          <Link
            to="/pricing"
            className="gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 glow-hover"
          >
            <span>View Pricing</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Pro Features */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pro Plan Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Unlock the full potential of AI-powered business analysis with our comprehensive Pro features
            </p>
          </div>

          <div className="space-y-4">
            {proFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFeature(openFeature === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/10 dark:hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl gradient-primary shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {openFeature === index ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFeature === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <ul className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Add-ons */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Add-ons
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Advanced AI capabilities to supercharge your business intelligence and decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAddOns.map((addon, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 glow-hover"
              >
                <div className="text-center mb-6">
                  <div className="p-3 rounded-xl gradient-primary w-fit mx-auto mb-4 shadow-lg">
                    <addon.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {addon.title}
                  </h3>
                  <div className="text-2xl font-bold text-primary-600 mb-3">
                    {addon.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {addon.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {addon.details.slice(0, 3).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <span className="text-primary-600 text-sm font-medium">
                      +{addon.details.length - 3} more features
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Add-ons */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Collaboration & Integration Add-ons
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Enhance team productivity and streamline your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regularAddOns.map((addon, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center mb-6">
                  <div className="p-3 rounded-xl gradient-primary w-fit mx-auto mb-4 shadow-lg">
                    <addon.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {addon.title}
                  </h3>
                  <div className="text-2xl font-bold text-primary-600 mb-3">
                    {addon.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {addon.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {addon.details.slice(0, 4).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <span className="text-primary-600 text-sm font-medium">
                      +{addon.details.length - 4} more features
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pay-per-use Add-ons */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pay-per-use Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Flexible, on-demand services for specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {payPerUseAddOns.map((addon, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl gradient-primary shadow-lg">
                    <addon.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {addon.title}
                    </h3>
                    <div className="text-2xl font-bold text-primary-600 mb-3">
                      {addon.price}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {addon.description}
                    </p>
                    <div className="space-y-2">
                      {addon.details.slice(0, 3).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start with our Pro plan and add the features you need as your business grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 glow-hover"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="glass border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;