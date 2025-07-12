import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Building, 
  Plus, 
  Edit, 
  ExternalLink, 
  FileText, 
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Globe,
  Phone,
  Mail,
  DollarSign,
  BarChart3,
  Archive,
  Settings,
  Upload,
  Download,
  Trash2,
  Eye,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

const BusinessesList: React.FC = () => {
  const [businesses] = useState([
    {
      id: '1',
      name: 'TechStart Solutions',
      industry: 'Technology',
      type: 'Startup',
      revenue: '$500K - $1M',
      employees: '6-20 employees',
      location: 'San Francisco, CA',
      website: 'https://techstart.com',
      email: 'contact@techstart.com',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      lastAnalysis: '2 days ago',
      healthScore: 87,
      integrations: ['Google Sheets', 'QuickBooks'],
      documents: 12,
      createdDate: '2024-12-01',
    },
    {
      id: '2',
      name: 'Green Energy Co',
      industry: 'Energy',
      type: 'Small Business',
      revenue: '$100K - $500K',
      employees: '1-5 employees',
      location: 'Austin, TX',
      website: 'https://greenenergy.com',
      email: 'info@greenenergy.com',
      phone: '+1 (555) 987-6543',
      status: 'Active',
      lastAnalysis: '1 week ago',
      healthScore: 72,
      integrations: ['Xero'],
      documents: 8,
      createdDate: '2025-01-15',
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Business Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Manage your business portfolio, integrations, and documents
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 glow-hover"
        >
          <Plus className="h-4 w-4" />
          <span>Add Business</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Businesses</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">79%</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Avg Health Score</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">15</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Analyses</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">20</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Documents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Businesses Grid */}
      <div className="grid gap-6">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="glass-card rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl gradient-primary shadow-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {business.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span>{business.industry}</span>
                    <span>•</span>
                    <span>{business.type}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-600">{business.status}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {business.healthScore}%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Health Score
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/dashboard/businesses/${business.id}`}
                    className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                  >
                    <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </Link>
                  <button className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                    <Edit className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                    <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{business.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <DollarSign className="h-4 w-4" />
                <span>{business.revenue}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4" />
                <span>{business.employees}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>Last analysis: {business.lastAnalysis}</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Globe className="h-4 w-4" />
                <a 
                  href={business.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 truncate"
                >
                  {business.website}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="truncate">{business.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span>{business.phone}</span>
              </div>
            </div>

            {/* Integrations & Documents */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-gray-700/30">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Integrations:</span>
                  <div className="flex items-center space-x-1">
                    {business.integrations.map((integration, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <FileText className="h-4 w-4" />
                  <span>{business.documents} documents</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Link
                  to={`/dashboard/businesses/${business.id}/documents`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Manage
                </Link>
                <button className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">
                  <Archive className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Business Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
          <div className="glass-card rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Add New Business
              </h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                    placeholder="Enter business name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Industry *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white">
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                    placeholder="City, State/Country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                  placeholder="Brief description of your business..."
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-white/10 dark:border-gray-700/30">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-3 glass hover:bg-white/20 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 glow-hover"
                >
                  Add Business
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const BusinessDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            TechStart Solutions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Technology Startup • San Francisco, CA
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="glass hover:bg-white/20 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium transition-all duration-200">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </button>
          <button className="gradient-primary hover:shadow-2xl text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 glow-hover">
            <BarChart3 className="h-4 w-4 mr-2" />
            Run Analysis
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'integrations', label: 'Integrations' },
            { id: 'documents', label: 'Documents' },
            { id: 'analytics', label: 'Analytics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Business Name
                  </label>
                  <p className="text-gray-900 dark:text-white">TechStart Solutions</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Industry
                  </label>
                  <p className="text-gray-900 dark:text-white">Technology</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Business Type
                  </label>
                  <p className="text-gray-900 dark:text-white">Startup</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Location
                  </label>
                  <p className="text-gray-900 dark:text-white">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Annual Revenue
                  </label>
                  <p className="text-gray-900 dark:text-white">$500K - $1M</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Team Size
                  </label>
                  <p className="text-gray-900 dark:text-white">6-20 employees</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Website
                  </label>
                  <a 
                    href="https://techstart.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    https://techstart.com
                  </a>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Health Score
                  </label>
                  <p className="text-gray-900 dark:text-white font-semibold">87%</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Google Sheets', status: 'Connected', icon: '📊' },
                  { name: 'QuickBooks', status: 'Connected', icon: '📚' },
                  { name: 'Xero', status: 'Available', icon: '💼' },
                  { name: 'HubSpot CRM', status: 'Available', icon: '👥' },
                  { name: 'Stripe', status: 'Available', icon: '💳' },
                  { name: 'Salesforce', status: 'Available', icon: '⚡' },
                ].map((integration, index) => (
                  <div key={index} className="glass rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">{integration.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {integration.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      integration.status === 'Connected'
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {integration.status}
                    </span>
                    {integration.status === 'Available' && (
                      <button className="w-full mt-3 gradient-primary text-white py-2 rounded-lg text-sm font-medium">
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Business Documents
                </h3>
                <button className="gradient-primary hover:shadow-2xl text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 glow-hover">
                  <Upload className="h-4 w-4" />
                  <span>Upload</span>
                </button>
              </div>

              <div className="grid gap-4">
                {[
                  { name: 'Business Plan 2025.pdf', size: '2.4 MB', date: '2025-01-15', type: 'pdf' },
                  { name: 'Financial Report Q4.xlsx', size: '1.8 MB', date: '2025-01-10', type: 'excel' },
                  { name: 'Marketing Strategy.docx', size: '956 KB', date: '2025-01-08', type: 'word' },
                  { name: 'Team Structure.png', size: '445 KB', date: '2025-01-05', type: 'image' },
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass rounded-xl">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-primary-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{doc.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {doc.size} • {doc.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                        <Download className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Analyses', value: '12', change: '+3 this month', icon: BarChart3 },
                  { label: 'Health Score', value: '87%', change: '+5% this month', icon: TrendingUp },
                  { label: 'Documents', value: '12', change: '+2 this week', icon: FileText },
                  { label: 'Integrations', value: '2', change: 'Active', icon: Settings },
                ].map((stat, index) => (
                  <div key={index} className="glass rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <stat.icon className="h-5 w-5 text-primary-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Businesses: React.FC = () => {
  return (
    <Routes>
      <Route index element={<BusinessesList />} />
      <Route path=":id" element={<BusinessDetails />} />
    </Routes>
  );
};

export default Businesses;