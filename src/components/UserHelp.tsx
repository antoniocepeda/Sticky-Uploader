import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export const UserHelp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const helpTopics = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using Sticky Uploader 5000',
      link: '#',
    },
    {
      title: 'Creating Stickies',
      description: 'How to create and customize your sticky notes',
      link: '#',
    },
    {
      title: 'Markdown Guide',
      description: 'Format your sticky notes with Markdown',
      link: '#',
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Boost your productivity with shortcuts',
      link: '#',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform translate-y-0">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Help Center</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {topic.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{topic.description}</p>
              </a>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Need more help?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Can't find what you're looking for? Contact our support team.
            </p>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};