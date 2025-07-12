import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Brain, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('jfSD56465F5454!');
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoUsers, setShowDemoUsers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname;

  // Redirect if user is already logged in
  useEffect(() => {
    if (user && !authLoading) {
      // Redirect based on user role
      if (user.role === 'affiliate_partner') {
        console.log('Affiliate user logged in, redirecting to affiliate dashboard');
        navigate('/affiliate-dashboard', { replace: true });
      } else {
        const destination = from || '/dashboard';
        console.log('User is logged in, redirecting to:', destination);
        navigate(destination, { replace: true });
      }
    }
  }, [user, authLoading, from, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading || authLoading) {
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      await login(email, password);
      console.log('Login process completed successfully');
    } catch (err: any) {
      console.error('Login failed:', err);
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const demoUsers = [
    { email: 'admin@zyntify.com', password: 'jfSD56465F5454!', role: 'Super Admin: Abelardo Mazo' },
    { email: 'custpro@example.com', password: 'jfSD56465F5454!', role: 'Pro Customer: Peter Crease' },
    { email: 'custfree@example.com', password: 'jfSD56465F5454!', role: 'Free Customer: Frea Chansler' },
    { email: 'company@example.com', password: 'jfSD56465F5454!', role: 'Company User: Connie Ursula' },
    { email: 'affiliate@example.com', password: 'jfSD56465F5454!', role: 'Affiliate Partner: Arfy Postantino' },
    { email: 'test@example.com', password: 'jfSD56465F5454!', role: 'Incomplete Onboarding: Inna Ontarry' },
  ];

  const handleUseCredentials = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
    setError('');
  };

  return (
    <div className="min-h-screen gradient-mesh dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex items-center justify-center p-6 min-h-screen">
        <div className="w-full max-w-md">
          <div className="glass-card shadow-2xl rounded-3xl p-8 glow">
            {/* Header */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                <div className="p-2 rounded-xl gradient-primary shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Zyntify
                </span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Sign in to your account to continue
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-error-50 dark:bg-error-900 border border-error-200 dark:border-error-700 text-error-700 dark:text-error-300 px-4 py-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || authLoading}
                className="w-full gradient-primary hover:shadow-2xl disabled:opacity-50 text-white py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center glow-hover"
              >
                {isLoading || authLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link 
                to="/forgot-password" 
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Floating Demo Users Box */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Toggle Button */}
          <button
            onClick={() => setShowDemoUsers(!showDemoUsers)}
            className="mb-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2"
          >
            <CheckCircle className="h-5 w-5" />
            {!showDemoUsers && <span className="text-sm font-medium">Demo Users</span>}
          </button>

          {/* Demo Users Panel */}
          {showDemoUsers && (
            <div className="glass-card rounded-2xl p-4 w-80 shadow-2xl border border-blue-200 dark:border-blue-700/30 bg-blue-50/95 dark:bg-blue-900/95 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Demo Users Available</span>
                </div>
                <button
                  onClick={() => setShowDemoUsers(false)}
                  className="text-blue-600 hover:text-blue-700 p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {demoUsers.map((user, index) => (
                  <div key={index} className="text-xs bg-white/50 dark:bg-gray-800/50 rounded-lg p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-blue-800 dark:text-blue-200">{user.role}</span>
                      <button
                        type="button"
                        onClick={() => handleUseCredentials(user.email, user.password)}
                        className="text-blue-600 hover:text-blue-700 font-medium px-2 py-1 rounded bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-200"
                      >
                        Use
                      </button>
                    </div>
                    <div className="font-mono text-blue-700 dark:text-blue-300 break-all">
                      {user.email}
                    </div>
                    <div className="font-mono text-blue-700 dark:text-blue-300">
                      {user.password}
                    </div>
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

export default Login;