import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { StickyNote } from './StickyNote';
import { StickyViewer } from './StickyViewer';
import { Sticky } from '../types';
import { TrendingUp, Star, Clock } from 'lucide-react';
import { publicStickies } from '../data/mockStickies';

type FilterType = 'trending' | 'top' | 'recent';

export const HomePage: React.FC = () => {
  const [stickies, setStickies] = useState<Sticky[]>(publicStickies);
  const [selectedSticky, setSelectedSticky] = useState<Sticky | null>(null);
  const [filter, setFilter] = useState<FilterType>('trending');

  const filters: { type: FilterType; label: string; icon: React.FC<any> }[] = [
    { type: 'trending', label: 'Trending', icon: TrendingUp },
    { type: 'top', label: 'Top Rated', icon: Star },
    { type: 'recent', label: 'Recent', icon: Clock },
  ];

  const handleVote = (stickyId: string, direction: 'up' | 'down') => {
    setStickies(currentStickies =>
      currentStickies.map(sticky => {
        if (sticky.id === stickyId) {
          const currentVote = sticky.userVote;
          let voteChange = 0;

          if (currentVote === direction) {
            // Remove vote
            voteChange = direction === 'up' ? -1 : 1;
            return { ...sticky, votes: sticky.votes + voteChange, userVote: null };
          } else if (currentVote === null) {
            // New vote
            voteChange = direction === 'up' ? 1 : -1;
            return { ...sticky, votes: sticky.votes + voteChange, userVote: direction };
          } else {
            // Change vote direction
            voteChange = direction === 'up' ? 2 : -2;
            return { ...sticky, votes: sticky.votes + voteChange, userVote: direction };
          }
        }
        return sticky;
      })
    );
  };

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
                onVote={(direction) => handleVote(sticky.id, direction)}
                showVotes
              />
            </div>
          ))}
        </div>
      </main>

      {/* Sticky Viewer Modal */}
      {selectedSticky && (
        <StickyViewer
          sticky={selectedSticky}
          onClose={() => setSelectedSticky(null)}
          onSave={(updatedSticky) => {
            setStickies(stickies.map(s => s.id === updatedSticky.id ? updatedSticky : s));
            setSelectedSticky(null);
          }}
        />
      )}
    </div>
  );
};