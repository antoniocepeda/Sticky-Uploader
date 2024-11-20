import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { UploadSticky } from './UploadSticky';
import { StickyNote } from './StickyNote';
import { NewStickyPage } from './NewStickyPage';
import { StickyViewer } from './StickyViewer';
import { Sticky } from '../types';
import { useUser } from '../contexts/UserContext';
import { DashboardLayout } from './layouts/DashboardLayout';
import { userStickies } from '../data/mockStickies';

export const Dashboard: React.FC = () => {
  const [stickies, setStickies] = useState<Sticky[]>([]);
  const [showNewSticky, setShowNewSticky] = useState(false);
  const [selectedSticky, setSelectedSticky] = useState<Sticky | null>(null);
  const { user } = useUser();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (user?.id) {
      setStickies(userStickies[user.id] || []);
    }
  }, [user?.id]);

  const handleStickyClick = (sticky: Sticky) => {
    setSelectedSticky(sticky);
  };

  const handleNewSticky = (stickyData: Partial<Sticky>) => {
    const newSticky: Sticky = {
      id: Math.random().toString(36).substr(2, 9),
      imageUrl: stickyData.imageUrl || '',
      content: stickyData.content || '',
      color: stickyData.color || 'yellow',
      createdAt: new Date(),
      votes: 0,
      userVote: null,
      author: {
        id: user?.id || '1',
        name: user?.name || 'Anonymous',
        avatar: user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
      },
    };
    setStickies([newSticky, ...stickies]);
    setShowNewSticky(false);
  };

  const handleUpdateSticky = (updatedSticky: Sticky) => {
    setStickies(stickies.map(s => s.id === updatedSticky.id ? updatedSticky : s));
    setSelectedSticky(null);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || isMobile) return;

    const items = Array.from(stickies);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStickies(items);
  };

  return (
    <DashboardLayout>
      <div className="pt-8">
        {isMobile ? (
          <div className="grid grid-cols-1 gap-4 px-4">
            <div className="w-full">
              <div onClick={() => setShowNewSticky(true)}>
                <UploadSticky />
              </div>
            </div>
            {stickies.map((sticky) => (
              <div key={sticky.id} className="w-full">
                <StickyNote
                  sticky={sticky}
                  onClick={() => handleStickyClick(sticky)}
                  showVotes={false}
                />
              </div>
            ))}
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="sticky-board" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-wrap gap-4"
                  style={{ minHeight: '100px' }}
                >
                  <div className="w-[300px] m-2">
                    <div onClick={() => setShowNewSticky(true)}>
                      <UploadSticky />
                    </div>
                  </div>
                  {stickies.map((sticky, index) => (
                    <Draggable key={sticky.id} draggableId={sticky.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`w-[300px] m-2 transition-all duration-200 ${
                            snapshot.isDragging ? 'scale-105 rotate-2 z-50' : ''
                          }`}
                        >
                          <StickyNote
                            sticky={sticky}
                            onClick={() => handleStickyClick(sticky)}
                            showVotes={false}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>

      {showNewSticky && (
        <NewStickyPage
          onClose={() => setShowNewSticky(false)}
          onSave={handleNewSticky}
        />
      )}

      {selectedSticky && (
        <StickyViewer
          sticky={selectedSticky}
          onClose={() => setSelectedSticky(null)}
          onSave={handleUpdateSticky}
        />
      )}
    </DashboardLayout>
  );
};