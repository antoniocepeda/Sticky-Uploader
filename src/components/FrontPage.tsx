import React, { useState } from 'react';
import { Header } from './Header';
import { StickyNote } from './StickyNote';
import { Sticky } from '../types';
import { Flame, Clock, TrendingUp } from 'lucide-react';

const filters = [
  { type: 'trending', label: 'Trending', icon: Flame },
  { type: 'recent', label: 'Recent', icon: Clock },
  { type: 'top', label: 'Top Rated', icon: TrendingUp },
] as const;

type FilterType = typeof filters[number]['type'];

export const FrontPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('trending');
  const [stickies, setStickies] = useState<Sticky[]>([]);
  const [selectedSticky, setSelectedSticky] = useState<Sticky | null>(null);

  const sortStickies = (stickies: Sticky[]): Sticky[] => {
    switch (filter) {
      case 'top':
        return [...stickies].sort((a, b) => b.votes - a.votes);
      case 'recent':
        return [...stickies].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      case 'trending':
      default:
        return [...stickies].sort((a, b) => {
          const timeWeight = 0.3;
          const voteWeight = 0.7;
          const timeA = a.createdAt.getTime();
          const timeB = b.createdAt.getTime();
          const scoreA = (a.votes * voteWeight) + (timeA * timeWeight);
          const scoreB = (b.votes * voteWeight) + (timeB * timeWeight);
          return scoreB - scoreA;
        });
    }
  };

  const sortedStickies = sortStickies(stickies);

  return (
    <div className="min-h-screen">
      <Header onLogout={() => {}} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {filters.map(({ type, label, icon: Icon }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                filter === type
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Stickies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedStickies.map((sticky) => (
            <div key={sticky.id}>
              <StickyNote
                sticky={sticky}
                onClick={() => setSelectedSticky(sticky)}
                showVotes
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};