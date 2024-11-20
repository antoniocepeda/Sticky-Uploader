import React, { useState, useEffect } from 'react';
import { X, Edit2, Save, Eye } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Sticky } from '../types';

interface StickyViewerProps {
  sticky: Sticky;
  onClose: () => void;
  onSave: (updatedSticky: Sticky) => void;
}

export const StickyViewer: React.FC<StickyViewerProps> = ({ sticky, onClose, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(sticky.content);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSave = () => {
    onSave({ ...sticky, content });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full ${isMobile ? 'h-full' : 'h-[80vh] max-w-6xl'} bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <img
                src={sticky.author.avatar}
                alt={sticky.author.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {sticky.author.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(sticky.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                {isEditing ? <Eye className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className={`flex-1 flex ${isMobile ? 'flex-col' : 'flex-row'} overflow-hidden`}>
            {/* Image Section */}
            <div className={`${isMobile ? 'h-1/3' : 'w-[60%]'} p-6 border-r border-gray-200 dark:border-gray-700 overflow-auto`}>
              {sticky.imageUrl ? (
                <img
                  src={sticky.imageUrl}
                  alt="Sticky content"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  No image attached
                </div>
              )}
            </div>

            {/* Markdown Section */}
            <div className={`${isMobile ? 'h-2/3' : 'w-[40%]'} p-6 overflow-auto`}>
              {isEditing ? (
                <div className="h-full flex flex-col">
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="flex-1 w-full p-4 border-2 rounded-lg font-mono text-sm bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:text-gray-100"
                    placeholder="# Title&#10;Your content here..."
                  />
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setIsEditing(true)}
                  className="h-full p-4 border-2 rounded-lg cursor-text hover:bg-gray-50 dark:hover:bg-gray-900 border-gray-200 dark:border-gray-700"
                >
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};