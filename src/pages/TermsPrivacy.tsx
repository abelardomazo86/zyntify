import React, { useState } from 'react';
import { Shield, FileText, Eye, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPrivacy: React.FC = () => {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      <div className="px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Shield className="h-16 w-16 text-primary-600 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Terms & Privacy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your privacy and security are our top priorities. Learn about our terms of service and privacy policy.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="flex border-b border-white/10 dark:border-gray-700/30">
              <button
                onClick={() => setActiveTab('terms')}
                className={`flex items-center space-x-2 px-8 py-4 font-medium transition-all duration-200 ${
                  activeTab === 'terms'
                    ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <FileText className="h-5 w-5" />
                <span>Terms of Service</span>
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center space-x-2 px-8 py-4 font-medium transition-all duration-200 ${
                  activeTab === 'privacy'
                    ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Eye className="h-5 w-5" />
                <span>Privacy Policy</span>
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'terms' && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="mb-8">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Last updated: January 15, 2025
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    By accessing and using Zyntify ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Description of Service
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Zyntify provides AI-powered business analysis and strategic planning tools for entrepreneurs, SMEs, and startups. Our service includes business analysis, competitor research, financial insights, and strategic recommendations.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. User Accounts
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    To access certain features of the Service, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information to keep it accurate</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Subscription and Billing
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Zyntify offers both free and paid subscription plans:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Free plans have limited features and usage</li>
                    <li>Paid subscriptions are billed monthly or annually</li>
                    <li>You may cancel your subscription at any time</li>
                    <li>Refunds are provided according to our refund policy</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Acceptable Use
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You agree not to use the Service to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Upload malicious code or attempt to hack the system</li>
                    <li>Share false or misleading business information</li>
                    <li>Resell or redistribute our services without permission</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Intellectual Property
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    The Service and its original content, features, and functionality are owned by Zyntify and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    In no event shall Zyntify be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    8. Contact Information
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    If you have any questions about these Terms of Service, please contact us at legal@zyntify.com.
                  </p>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="mb-8">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Last updated: January 15, 2025
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We collect information you provide directly to us, such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Account information (name, email, password)</li>
                    <li>Business information (company name, industry, size)</li>
                    <li>Financial data for analysis purposes</li>
                    <li>Documents and files you upload</li>
                    <li>Communication with our support team</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Provide and improve our AI analysis services</li>
                    <li>Generate business insights and recommendations</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Send important updates and notifications</li>
                    <li>Provide customer support</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Information Sharing
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We do not sell, trade, or rent your personal information. We may share your information only in these limited circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>With trusted service providers who assist our operations</li>
                    <li>To protect our rights and prevent fraud</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Data Retention
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You may request deletion of your data at any time, subject to legal requirements.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Your Rights
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Export your data in a portable format</li>
                    <li>File a complaint with data protection authorities</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Cookies and Tracking
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    We use cookies and similar technologies to improve your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    8. International Data Transfers
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    9. Contact Us
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    If you have any questions about this Privacy Policy, please contact us at privacy@zyntify.com or through our contact form.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPrivacy;