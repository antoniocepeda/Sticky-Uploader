import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Sticky } from '../types';
import { publicStickies, userStickies } from '../data/mockStickies';

interface StickyState {
  publicStickies: Sticky[];
  userStickies: Record<string, Sticky[]>;
  setPublicStickies: (stickies: Sticky[]) => void;
  setUserStickies: (userId: string, stickies: Sticky[]) => void;
  addSticky: (userId: string, sticky: Sticky) => void;
  updateSticky: (userId: string, sticky: Sticky) => void;
  deleteSticky: (userId: string, stickyId: string) => void;
  reorderStickies: (userId: string, startIndex: number, endIndex: number) => void;
  voteSticky: (stickyId: string, direction: 'up' | 'down', userId?: string) => void;
}

export const useStickyStore = create<StickyState>()(
  immer((set) => ({
    publicStickies,
    userStickies,

    setPublicStickies: (stickies) =>
      set((state) => {
        state.publicStickies = stickies;
      }),

    setUserStickies: (userId, stickies) =>
      set((state) => {
        state.userStickies[userId] = stickies;
      }),

    addSticky: (userId, sticky) =>
      set((state) => {
        if (!state.userStickies[userId]) {
          state.userStickies[userId] = [];
        }
        state.userStickies[userId].unshift(sticky);
      }),

    updateSticky: (userId, updatedSticky) =>
      set((state) => {
        const stickies = state.userStickies[userId];
        const index = stickies.findIndex((s) => s.id === updatedSticky.id);
        if (index !== -1) {
          stickies[index] = updatedSticky;
        }
      }),

    deleteSticky: (userId, stickyId) =>
      set((state) => {
        state.userStickies[userId] = state.userStickies[userId].filter(
          (s) => s.id !== stickyId
        );
      }),

    reorderStickies: (userId, startIndex, endIndex) =>
      set((state) => {
        const stickies = state.userStickies[userId];
        const [removed] = stickies.splice(startIndex, 1);
        stickies.splice(endIndex, 0, removed);
      }),

    voteSticky: (stickyId, direction, userId) =>
      set((state) => {
        const sticky = state.publicStickies.find((s) => s.id === stickyId);
        if (!sticky) return;

        if (sticky.userVote === direction) {
          sticky.votes += direction === 'up' ? -1 : 1;
          sticky.userVote = null;
        } else if (sticky.userVote === null) {
          sticky.votes += direction === 'up' ? 1 : -1;
          sticky.userVote = direction;
        } else {
          sticky.votes += direction === 'up' ? 2 : -2;
          sticky.userVote = direction;
        }
      }),
  }))
);