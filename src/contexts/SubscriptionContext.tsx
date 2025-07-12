import React, { createContext, useContext, useState } from 'react';

interface Subscription {
  plan: 'free' | 'pro';
  status: 'active' | 'inactive' | 'cancelled';
  businessesCount: number;
  analysesUsed: number;
  analysesLimit: number;
  addOns: string[];
}

interface SubscriptionContextType {
  subscription: Subscription;
  upgradeToPro: () => void;
  cancelSubscription: () => void;
  purchaseAddOn: (addOn: string) => void;
  cancelAddOn: (addOn: string) => void;
  canUseFeature: (feature: string) => boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [subscription, setSubscription] = useState<Subscription>({
    plan: 'pro', // Changed to pro for demo purposes
    status: 'active',
    businessesCount: 2,
    analysesUsed: 8,
    analysesLimit: -1, // Unlimited for pro
    addOns: ['ai-competitor-tracking', 'collaboration'],
  });

  const upgradeToPro = () => {
    setSubscription(prev => ({
      ...prev,
      plan: 'pro',
      analysesLimit: -1, // Unlimited
    }));
  };

  const cancelSubscription = () => {
    setSubscription(prev => ({
      ...prev,
      status: 'cancelled',
    }));
  };

  const purchaseAddOn = (addOn: string) => {
    setSubscription(prev => ({
      ...prev,
      addOns: [...prev.addOns, addOn],
    }));
  };

  const cancelAddOn = (addOn: string) => {
    setSubscription(prev => ({
      ...prev,
      addOns: prev.addOns.filter(addon => addon !== addOn),
    }));
  };

  const canUseFeature = (feature: string) => {
    if (subscription.plan === 'pro') {
      switch (feature) {
        case 'collaboration':
          return subscription.addOns.includes('collaboration');
        case 'task-assignment':
          return subscription.addOns.includes('task-assignment');
        case 'ai-swot':
          return subscription.addOns.includes('ai-swot');
        case 'competitor-tracking':
          return subscription.addOns.includes('ai-competitor-tracking');
        case 'crm-integration':
          return subscription.addOns.includes('crm-integration');
        default:
          return true;
      }
    }
    
    switch (feature) {
      case 'advanced-analysis':
      case 'strategy-planning':
      case 'competitor-analysis':
      case 'team-management':
      case 'strategy-monitoring':
      case 'strategy-monitoring':
        return false;
      case 'basic-analysis':
        return subscription.analysesUsed < subscription.analysesLimit;
      default:
        return true;
    }
  };

  return (
    <SubscriptionContext.Provider value={{
      subscription,
      upgradeToPro,
      cancelSubscription,
      purchaseAddOn,
      cancelAddOn,
      canUseFeature,
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};