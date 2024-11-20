import React, { useState, useRef, useEffect } from 'react';
import { LogOut, Settings, User as UserIcon, HelpCircle, Bell } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { UserProfile } from './UserProfile';
import { UserSettings } from './UserSettings';
import { UserHelp } from './UserHelp';
import { useNavigate } from 'react-router-dom';

interface UserDropdownProps {
  onLogout: () => void;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ onLogout }) => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      icon: UserIcon,
      label: 'Profile',
      onClick: () => {
        setShowProfile(true);
        setIsOpen(false);
      },
    },
    {
      icon: Settings,
      label: 'Settings',
      onClick: () => {
        setShowSettings(true);
        setIsOpen(false);
      },
    },
    {
      icon: HelpCircle,
      label: 'Help',
      onClick: () => {
        setShowHelp(true);
        setIsOpen(false);
      },
    },
    {
      icon: LogOut,
      label: 'Sign out',
      onClick: () => {
        onLogout();
        navigate('/'); // Ensure navigation to landing page
      },
      className: 'text-red-600 dark:text-red-400',
    },
  ];

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="User menu"
        >
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-8 h-8 rounded-full"
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <p className="font-medium text-gray-900 dark:text-gray-100">{user?.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
            
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
                  item.className || 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {showProfile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <UserProfile onClose={() => setShowProfile(false)} />
        </div>
      )}
      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <UserSettings onClose={() => setShowSettings(false)} />
        </div>
      )}
      {showHelp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <UserHelp onClose={() => setShowHelp(false)} />
        </div>
      )}
    </>
  );
};