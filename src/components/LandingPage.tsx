import React from 'react';
import { StickyNote, ArrowRight, Check, Sun, Moon } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const features = [
    'Create beautiful sticky notes with Markdown support',
    'Upload and attach images to your notes',
    'Organize with a dynamic masonry layout',
    'Dark mode support for comfortable viewing',
    'Real-time collaboration features',
    'Secure cloud storage for your notes',
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <StickyNote className="w-6 h-6 text-yellow-500" />
              <span className="font-bold text-lg hidden sm:inline">Sticky Uploader</span>
              <span className="font-bold text-lg sm:hidden">Sticky</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-300" />
                )}
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm sm:text-base"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <StickyNote className="w-20 h-20 text-yellow-500" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
              Sticky Uploader
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your ideas into beautiful digital sticky notes. Share, collaborate, and organize like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/signup')}
                className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-medium"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/home')}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 border-2 border-yellow-500/50 flex items-center justify-center gap-2 text-lg font-medium"
              >
                Browse Stickies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105"
            >
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800 dark:text-gray-200">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <StickyNote className="w-6 h-6 text-yellow-500" />
              <span className="text-lg font-medium">Sticky Uploader</span>
            </div>
            <div className="flex gap-6">
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">About</Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Privacy</Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Terms</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};