export interface Sticky {
  id: string;
  imageUrl: string;
  content: string;
  color: StickyColor;
  createdAt: Date;
  votes: number;
  userVote?: 'up' | 'down' | null;
  isPublic?: boolean;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
}

export type StickyColor = 'yellow' | 'pink' | 'blue' | 'green';