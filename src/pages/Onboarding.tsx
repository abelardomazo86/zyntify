import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Building, 
  Users, 
  Target, 
  ArrowRight, 
  ArrowLeft, 
  Globe,
  Facebook,
  Linkedin,
  Upload
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import FileUpload from '../components/FileUpload';

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessOwner: '',
    website: '',
    facebook: '',
    linkedin: '',
    industry: '',
    businessType: '',
    teamSize: '',
    revenue: '',
    primaryGoal: '',
    challenges: [],
    description: '',
    documents: [] as File[],
  });

  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Retail', 'Manufacturing',
    'Education', 'Real Estate', 'Food & Beverage', 'Professional Services', 'Other'
  ];

  const businessTypes = [
    'Startup', 'Small Business', 'Medium Enterprise', 'Franchise', 'Non-profit'
  ];

  const teamSizes = [
    '1-5 employees', '6-20 employees', '21-50 employees', '51-200 employees', '200+ employees'
  ];

  const revenueRanges = [
    'Pre-revenue', 'Under $100K', '$100K - $500K', '$500K - $1M', '$1M - $5M', '$5M+'
  ];

  const goals = [
    'Increase Revenue', 'Expand Market Share', 'Improve Operations', 'Scale Team', 'Launch New Products'
  ];

  const challengeOptions = [
    'Finding customers', 'Cash flow management', 'Team building', 'Product development',
    'Marketing strategy', 'Competition', 'Operations efficiency', 'Funding'
  ];

  const handleInputChange = (field: string, value: string | string[] | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChallengeToggle = (challenge: string) => {
    const currentChallenges = formData.challenges;
    if (currentChallenges.includes(challenge)) {
      handleInputChange('challenges', currentChallenges.filter(c => c !== challenge));
    } else {
      handleInputChange('challenges', [...currentChallenges, challenge]);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    updateUser({
      businessName: formData.businessName,
      businessOwner: formData.businessOwner,
      website: formData.website,
      facebook: formData.facebook,
      linkedin: formData.linkedin,
      documents: formData.documents.map(file => file.name),
      onboardingCompleted: true,
    });
    navigate('/dashboard');
  };

  const handleCancel = () => {
    updateUser({
      onboardingCompleted: true,
    });
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Building className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Business Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Tell us about your business to get personalized insights
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                placeholder="Enter your business name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Business Owner *
              </label>
              <input
                type="text"
                value={formData.businessOwner}
                onChange={(e) => handleInputChange('businessOwner', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                placeholder="Enter the business owner's name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                required
              >
                <option value="">Select your industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Business Type *
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => handleInputChange('businessType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                required
              >
                <option value="">Select business type</option>
                {businessTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Globe className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Online Presence
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Connect your digital presence for better analysis
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website URL
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Facebook Page
              </label>
              <div className="relative">
                <Facebook className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-600" />
                <input
                  type="url"
                  value={formData.facebook}
                  onChange={(e) => handleInputChange('facebook', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                LinkedIn Profile/Company Page
              </label>
              <div className="relative">
                <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-600" />
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Business Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                placeholder="Brief description of what your business does..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Users className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Business Details
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Share some key metrics about your business
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Team Size *
              </label>
              <select
                value={formData.teamSize}
                onChange={(e) => handleInputChange('teamSize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                required
              >
                <option value="">Select team size</option>
                {teamSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Annual Revenue *
              </label>
              <select
                value={formData.revenue}
                onChange={(e) => handleInputChange('revenue', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                required
              >
                <option value="">Select revenue range</option>
                {revenueRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Primary Goal *
              </label>
              <select
                value={formData.primaryGoal}
                onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                required
              >
                <option value="">Select your primary goal</option>
                {goals.map(goal => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                Current Challenges (select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {challengeOptions.map(challenge => (
                  <button
                    key={challenge}
                    type="button"
                    onClick={() => handleChallengeToggle(challenge)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      formData.challenges.includes(challenge)
                        ? 'glass bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500 text-primary-700 dark:text-primary-300 glow'
                        : 'glass border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-500'
                    }`}
                  >
                    {challenge}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Upload className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Upload Documents
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Upload relevant business documents for better analysis (optional)
              </p>
            </div>

            <FileUpload
              onFilesChange={(files) => handleInputChange('documents', files)}
              maxFiles={5}
              acceptedTypes={['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.txt']}
              maxSize={10}
            />

            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Suggested Documents:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Business plan or executive summary</li>
                <li>• Financial statements or reports</li>
                <li>• Marketing materials or brochures</li>
                <li>• Organizational charts</li>
                <li>• Product catalogs or service descriptions</li>
                <li>• Competitor analysis documents</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.businessName && formData.businessOwner && formData.industry && formData.businessType;
      case 2:
        return true; // All fields are optional
      case 3:
        return formData.teamSize && formData.revenue && formData.primaryGoal;
      case 4:
        return true; // Document upload is optional
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="p-3 rounded-xl gradient-primary w-fit mx-auto mb-4 shadow-lg">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
            Welcome to Zyntify
          </h1>
          <div className="flex items-center justify-center space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  step <= currentStep
                    ? 'gradient-primary shadow-lg'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Step {currentStep} of 4
          </p>
        </div>

        {/* Content */}
        <div className="glass-card rounded-3xl shadow-2xl p-8 glow">
          {renderStep()}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10 dark:border-gray-700/30">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed glass rounded-xl transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={currentStep === 4 ? handleComplete : handleNext}
              disabled={!isStepValid()}
              className="flex items-center space-x-2 gradient-primary hover:shadow-2xl disabled:opacity-50 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 glow-hover"
            >
              <span>{currentStep === 4 ? 'Complete Setup' : 'Continue'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          {/* Cancel Button */}
          <div className="text-center mt-4">
            <button
              onClick={handleCancel}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors duration-200"
            >
              Skip onboarding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;