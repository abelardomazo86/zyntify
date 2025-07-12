import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'customer' | 'company_user' | 'affiliate_partner';
  businessName?: string;
  businessOwner?: string;
  website?: string;
  facebook?: string;
  linkedin?: string;
  documents?: string[];
  onboardingCompleted: boolean;
  authProvider?: 'email' | 'google' | 'linkedin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  resetPassword: (email: string) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In-memory user database with different roles
const DEMO_USERS: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'admin@zyntify.com',
    password: 'jfSD56465F5454!',
    name: 'Abelardo Mazo',
    role: 'super_admin',
    businessName: 'Zyntify Platform',
    businessOwner: 'Abelardo Mazo',
    website: 'https://zyntify.com',
    onboardingCompleted: true,
    authProvider: 'email',
  },
  {
    id: '2',
    email: 'custpro@example.com',
    password: 'jfSD56465F5454!',
    name: 'Peter Crease',
    role: 'customer',
    businessName: 'Pro Customer Business Inc',
    businessOwner: 'Peter Crease',
    website: 'https://procustomer.com',
    onboardingCompleted: true,
    authProvider: 'email',
  },
  {
    id: '3',
    email: 'custfree@example.com',
    password: 'jfSD56465F5454!',
    name: 'Frea Chansler',
    role: 'customer',
    businessName: 'Free Customer Business',
    businessOwner: 'Frea Chansler',
    website: 'https://freecustomer.com',
    onboardingCompleted: true,
    authProvider: 'email',
  },
  {
    id: '4',
    email: 'company@example.com',
    password: 'jfSD56465F5454!',
    name: 'Connie Ursula',
    role: 'company_user',
    businessName: 'Enterprise Corp',
    businessOwner: 'Connie Ursula',
    website: 'https://enterprise.com',
    onboardingCompleted: true,
    authProvider: 'email',
  },
  {
    id: '5',
    email: 'affiliate@example.com',
    password: 'jfSD56465F5454!',
    name: 'Arfy Postantino',
    role: 'affiliate_partner',
    businessName: 'Affiliate Marketing Co',
    businessOwner: 'Arfy Postantino',
    website: 'https://affiliatemarketing.com',
    onboardingCompleted: true,
    authProvider: 'email',
  },
  {
    id: '6',
    email: 'test@example.com',
    password: 'jfSD56465F5454!',
    name: 'Inna Ontarry',
    role: 'customer',
    businessName: 'Test Business',
    businessOwner: 'Inna Ontarry',
    onboardingCompleted: false,
    authProvider: 'email',
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('AuthContext: Initializing in-memory auth...');
    
    const storedUser = localStorage.getItem('demo_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        console.log('AuthContext: Found stored session for:', userData.email);
        setUser(userData);
      } catch (error) {
        console.error('AuthContext: Error parsing stored user:', error);
        localStorage.removeItem('demo_user');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    console.log('Attempting login for:', email);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = DEMO_USERS.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid login credentials');
    }
    
    // Remove password from user object
    const { password: _, ...userWithoutPassword } = foundUser;
    
    console.log('Login successful for:', email, 'Role:', foundUser.role);
    setUser(userWithoutPassword);
    localStorage.setItem('demo_user', JSON.stringify(userWithoutPassword));
  };

  const register = async (email: string, password: string, name: string) => {
    console.log('Attempting registration for:', email);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = DEMO_USERS.find(u => u.email === email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: 'customer',
      onboardingCompleted: false,
      authProvider: 'email',
    };
    
    // Add to demo users array
    DEMO_USERS.push({ ...newUser, password });
    
    console.log('Registration successful for:', email);
    setUser(newUser);
    localStorage.setItem('demo_user', JSON.stringify(newUser));
  };

  const resetPassword = async (email: string) => {
    console.log('Password reset requested for:', email);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = DEMO_USERS.find(u => u.email === email);
    if (!foundUser) {
      throw new Error('User not found');
    }
    
    console.log('Password reset email sent to:', email);
    // In a real app, this would send an email
  };

  const logout = () => {
    console.log('User logged out');
    setUser(null);
    localStorage.removeItem('demo_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('demo_user', JSON.stringify(updatedUser));
    
    // Update the demo users array
    const userIndex = DEMO_USERS.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      DEMO_USERS[userIndex] = { ...DEMO_USERS[userIndex], ...updates };
    }
    
    console.log('User updated:', updates);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateUser,
      resetPassword,
      isLoading,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};