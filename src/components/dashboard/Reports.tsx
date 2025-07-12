import React from 'react';
import { BarChart3, Download, Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';

const Reports: React.FC = () => {
  const reports = [
    {
      title: 'Monthly Business Report',
      description: 'Comprehensive overview of your business performance',
      date: 'February 2025',
      status: 'Ready',
      type: 'PDF',
      icon: BarChart3,
    },
    {
      title: 'Market Analysis Report',
      description: 'Detailed analysis of your market position',
      date: 'January 2025',
      status: 'Ready',
      type: 'PDF',
      icon: TrendingUp,
    },
    {
      title: 'Customer Insights Report',
      description: 'Analysis of customer behavior and preferences',
      date: 'January 2025',
      status: 'Ready',
      type: 'PDF',
      icon: Users,
    },
    {
      title: 'Financial Performance Report',
      description: 'Financial metrics and forecasting analysis',
      date: 'December 2024',
      status: 'Ready',
      type: 'PDF',
      icon: DollarSign,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Reports
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Access and download your business analysis reports
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gri-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <BarChart3 className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Reports</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <Download className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Downloaded</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">This Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Available Reports
          </h2>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {reports.map((report, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg">
                    <report.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {report.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{report.date}</span>
                      <span>•</span>
                      <span>{report.type}</span>
                      <span>•</span>
                      <span className="text-green-600">{report.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;