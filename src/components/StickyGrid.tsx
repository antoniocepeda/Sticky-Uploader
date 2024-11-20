import React from 'react';
import Masonry from 'react-masonry-css';
import { StickyNote } from './StickyNote';
import { Sticky } from '../types';

interface StickyGridProps {
  stickies: Sticky[];
  onStickyClick: (sticky: Sticky) => void;
}

export const StickyGrid: React.FC<StickyGridProps> = ({ stickies, onStickyClick }) => {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {stickies.map((sticky) => (
        <div key={sticky.id} className="mb-4">
          <StickyNote
            sticky={sticky}
            onClick={() => onStickyClick(sticky)}
          />
        </div>
      ))}
    </Masonry>
  );
};