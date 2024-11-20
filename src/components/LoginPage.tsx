import React, { useState } from 'react';
import { StickyNote, Mail, Lock, LogIn } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/app');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen cork-texture flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md transform sm:rotate-2 transition-transform sm:hover:rotate-0">
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-[0_15px_25px_-12px_rgba(0,0,0,0.3)] p-6 sm:p-8 md:p-12">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center mb-3 sm:mb-4">
              <StickyNote className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2">Welcome Back!</h1>
            <p className="text-sm sm:text-base text-gray-300">Sign in to access your stickies</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-100 placeholder-gray-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-100 placeholder-gray-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800 transform transition-all duration-200 active:scale-95"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign in</span>
            </button>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-300">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-yellow-400 hover:text-yellow-300 font-medium"
                >
                  Sign up
                </Link>
              </p>
              <Link
                to="/"
                className="text-sm text-gray-400 hover:text-gray-300"
              >
                Landing page
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};