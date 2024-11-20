import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { User, Settings, Bell, Mail, X, Save } from 'lucide-react';

export const UserProfile: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [notifications, setNotifications] = useState(user?.preferences.notifications || false);
  const [emailUpdates, setEmailUpdates] = useState(user?.preferences.emailUpdates || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({
      name,
      email,
      preferences: {
        ...user!.preferences,
        notifications,
        emailUpdates,
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform translate-y-0">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Profile Settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Preferences
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notifications"
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                    className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <label htmlFor="notifications" className="ml-2 text-gray-600 dark:text-gray-300">
                    Enable notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailUpdates"
                    checked={emailUpdates}
                    onChange={(e) => setEmailUpdates(e.target.checked)}
                    className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <label htmlFor="emailUpdates" className="ml-2 text-gray-600 dark:text-gray-300">
                    Receive email updates
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};