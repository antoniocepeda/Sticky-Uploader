import React from 'react';
import { Plus } from 'lucide-react';

export const UploadSticky: React.FC = () => {
  return (
    <div className="relative group transform transition-all duration-300 hover:scale-105 cursor-pointer h-[320px]">
      <div className="p-6 rounded-2xl shadow-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-yellow-500 dark:hover:border-yellow-400 hover:bg-white/70 dark:hover:bg-gray-800/70">
        <Plus className="w-12 h-12 text-gray-400 dark:text-gray-500 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 mb-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 text-center">
          Click to upload a new sticky
        </p>
      </div>
    </div>
  );
};