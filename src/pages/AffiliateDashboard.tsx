import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AffiliateSidebar from '../components/AffiliateSidebar';
import AffiliateDashboardHome from '../components/affiliate/AffiliateDashboardHome';
import ReferralTools from '../components/affiliate/ReferralTools';
import EarningsHistory from '../components/affiliate/EarningsHistory';
import RequestPayout from '../components/affiliate/RequestPayout';
import AffiliateSupport from '../components/affiliate/AffiliateSupport';

const AffiliateDashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <AffiliateSidebar 
        isCollapsed={sidebarCollapsed} 
        setIsCollapsed={setSidebarCollapsed} 
      />
      
      <div className={`flex-1 transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        <main className="p-6 overflow-auto h-full bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route index element={<AffiliateDashboardHome />} />
            <Route path="referral-tools" element={<ReferralTools />} />
            <Route path="earnings" element={<EarningsHistory />} />
            <Route path="payout" element={<RequestPayout />} />
            <Route path="support" element={<AffiliateSupport />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AffiliateDashboard;