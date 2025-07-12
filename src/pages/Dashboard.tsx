import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardHome from '../components/dashboard/DashboardHome';
import AIAnalysis from '../components/dashboard/AIAnalysis';
import Strategy from '../components/dashboard/Strategy';
import Growth from '../components/dashboard/Growth';
import Reports from '../components/dashboard/Reports';
import Competitors from '../components/dashboard/Competitors';
import AddOns from '../components/dashboard/AddOns';
import Billing from '../components/dashboard/Billing';
import Settings from '../components/dashboard/Settings';
import Businesses from '../components/dashboard/Businesses';
import Monitoring from '../components/dashboard/Monitoring';
import Team from '../components/dashboard/Team';
import Integrations from '../components/dashboard/Integrations';
import AffiliateCenter from '../components/dashboard/AffiliateCenter';
import Support from '../components/dashboard/Support';

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        setIsCollapsed={setSidebarCollapsed} 
      />
      
      <div className={`flex-1 transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        <main className="p-6 overflow-auto h-full bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="businesses/*" element={<Businesses />} />
            <Route path="analysis" element={<AIAnalysis />} />
            <Route path="strategy" element={<Strategy />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="growth" element={<Growth />} />
            <Route path="reports" element={<Reports />} />
            <Route path="competitors" element={<Competitors />} />
            <Route path="addons" element={<AddOns />} />
            <Route path="team" element={<Team />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="affiliate-center" element={<AffiliateCenter />} />
            <Route path="billing" element={<Billing />} />
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;