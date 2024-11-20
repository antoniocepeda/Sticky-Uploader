import React from 'react';
import { StickyNote, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { UserDropdown } from './UserDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

interface HeaderProps {
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <StickyNote className="w-8 h-8 text-yellow-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
              Sticky Uploader 5000
            </h1>
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-6 h-6 text-gray-300" />
              )}
            </button>
            {user ? (
              <UserDropdown onLogout={onLogout} />
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <StickyNote className="w-8 h-8 text-yellow-500" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};