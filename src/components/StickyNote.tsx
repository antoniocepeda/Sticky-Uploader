import React from 'react';
import { Sticky } from '../types';
import ReactMarkdown from 'react-markdown';
import { Pin, ArrowUp, ArrowDown } from 'lucide-react';

interface StickyNoteProps {
  sticky: Sticky;
  onClick?: () => void;
  onVote?: (direction: 'up' | 'down') => void;
  showVotes?: boolean;
}

const colorClasses = {
  yellow: {
    light: 'bg-yellow-100 hover:bg-yellow-200',
    dark: 'dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-yellow-400 dark:hover:border-yellow-300',
    scrollbar: '[&:hover_::-webkit-scrollbar-thumb]:bg-yellow-300 [&_::-webkit-scrollbar-track]:bg-yellow-50 dark:[&:hover_::-webkit-scrollbar-thumb]:bg-yellow-400 dark:[&_::-webkit-scrollbar-track]:bg-gray-900',
  },
  pink: {
    light: 'bg-pink-100 hover:bg-pink-200',
    dark: 'dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-pink-400 dark:hover:border-pink-300',
    scrollbar: '[&:hover_::-webkit-scrollbar-thumb]:bg-pink-300 [&_::-webkit-scrollbar-track]:bg-pink-50 dark:[&:hover_::-webkit-scrollbar-thumb]:bg-pink-400 dark:[&_::-webkit-scrollbar-track]:bg-gray-900',
  },
  blue: {
    light: 'bg-blue-100 hover:bg-blue-200',
    dark: 'dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-blue-400 dark:hover:border-blue-300',
    scrollbar: '[&:hover_::-webkit-scrollbar-thumb]:bg-blue-300 [&_::-webkit-scrollbar-track]:bg-blue-50 dark:[&:hover_::-webkit-scrollbar-thumb]:bg-blue-400 dark:[&_::-webkit-scrollbar-track]:bg-gray-900',
  },
  green: {
    light: 'bg-green-100 hover:bg-green-200',
    dark: 'dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-green-400 dark:hover:border-green-300',
    scrollbar: '[&:hover_::-webkit-scrollbar-thumb]:bg-green-300 [&_::-webkit-scrollbar-track]:bg-green-50 dark:[&:hover_::-webkit-scrollbar-thumb]:bg-green-400 dark:[&_::-webkit-scrollbar-track]:bg-gray-900',
  },
};

export const StickyNote: React.FC<StickyNoteProps> = ({ sticky, onClick, onVote, showVotes = true }) => {
  const color = sticky.color as keyof typeof colorClasses;
  const colorClass = colorClasses[color];

  const handleVote = (e: React.MouseEvent, direction: 'up' | 'down') => {
    e.stopPropagation();
    onVote?.(direction);
  };

  return (
    <div className="relative group">
      <div
        className={`relative transform transition-all duration-300 hover:scale-105 cursor-pointer h-[320px] rounded-2xl border-2 ${
          colorClass.light
        } ${colorClass.dark} ${colorClass.scrollbar}`}
        onClick={onClick}
      >
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-[1]">
          <Pin className={`w-6 h-6 text-gray-600 dark:text-${color}-400`} />
        </div>
        
        <div className="p-6 rounded-2xl shadow-lg backdrop-blur-sm bg-opacity-90 h-full flex flex-col">
          {sticky.imageUrl && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={sticky.imageUrl}
                alt="Sticky note"
                className="w-full h-32 object-cover"
              />
            </div>
          )}
          
          <div className="prose prose-sm dark:prose-invert flex-1 overflow-auto hover-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:opacity-0 hover:[&::-webkit-scrollbar-thumb]:opacity-100 [&::-webkit-scrollbar-thumb]:transition-opacity">
            <ReactMarkdown>{sticky.content}</ReactMarkdown>
          </div>
          
          <div className="mt-4 pt-2 flex items-center justify-between gap-2 border-t border-black/5 dark:border-white/10">
            {showVotes ? (
              <div className="flex items-center gap-2">
                <img
                  src={sticky.author.avatar}
                  alt={sticky.author.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">{sticky.author.name}</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      {/* Vote buttons */}
      {showVotes && (
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">
          <button
            onClick={(e) => handleVote(e, 'up')}
            className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              sticky.userVote === 'up' ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {sticky.votes}
          </span>
          <button
            onClick={(e) => handleVote(e, 'down')}
            className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              sticky.userVote === 'down' ? 'text-red-500' : 'text-gray-400'
            }`}
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};