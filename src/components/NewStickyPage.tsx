import React, { useState } from 'react';
import { Image, X, Save } from 'lucide-react';
import { StickyColor } from '../types';

interface NewStickyPageProps {
  onClose: () => void;
  onSave: (sticky: {
    content: string;
    color: StickyColor;
    imageUrl?: string;
  }) => void;
}

export const NewStickyPage: React.FC<NewStickyPageProps> = ({ onClose, onSave }) => {
  const [content, setContent] = useState('');
  const [color, setColor] = useState<StickyColor>('yellow');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ content, color, imageUrl });
  };

  const colors: { value: StickyColor; label: string }[] = [
    { value: 'yellow', label: 'Yellow' },
    { value: 'pink', label: 'Pink' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ];

  const colorClasses = {
    yellow: 'bg-yellow-100 dark:bg-gray-800 dark:border-2 dark:border-yellow-400',
    pink: 'bg-pink-100 dark:bg-gray-800 dark:border-2 dark:border-pink-400',
    blue: 'bg-blue-100 dark:bg-gray-800 dark:border-2 dark:border-blue-400',
    green: 'bg-green-100 dark:bg-gray-800 dark:border-2 dark:border-green-400',
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-2xl ${colorClasses[color]} rounded-2xl shadow-xl`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">New Sticky</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Image (optional)
              </label>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter image URL"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white/80 dark:bg-gray-700/80 dark:text-white"
                  />
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-white/80 dark:bg-gray-700/80">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Image className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Color
              </label>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setColor(c.value)}
                    className={`w-8 h-8 rounded-full ${
                      c.value === 'yellow' ? 'bg-yellow-400' :
                      c.value === 'pink' ? 'bg-pink-400' :
                      c.value === 'blue' ? 'bg-blue-400' :
                      'bg-green-400'
                    } ${
                      color === c.value
                        ? 'ring-2 ring-offset-2 ring-yellow-500 dark:ring-offset-gray-800'
                        : ''
                    }`}
                    title={c.label}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Content (Markdown supported)
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white/80 dark:bg-gray-700/80 font-mono text-sm dark:text-white"
                placeholder="# Title&#10;Your content here..."
                required
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Sticky
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};