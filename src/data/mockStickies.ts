import { Sticky } from '../types';

// Helper function to create dates relative to now
const daysAgo = (days: number) => new Date(Date.now() - days * 24 * 60 * 60 * 1000);

// Public stickies for the homepage
export const publicStickies: Sticky[] = [
  {
    id: 'pub1',
    imageUrl: 'https://picsum.photos/seed/sticky1/400/300',
    content: '# Quick Tip: JavaScript Arrays\n\nUse `Array.from()` to create arrays from array-like objects:\n\n```js\nArray.from("hello") // ["h","e","l","l","o"]\n```',
    color: 'yellow',
    createdAt: daysAgo(2),
    votes: 42,
    userVote: null,
    author: {
      id: '1',
      name: 'Tony',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tony',
    },
  },
  {
    id: 'pub2',
    imageUrl: 'https://picsum.photos/seed/sticky2/400/300',
    content: '# React Best Practices\n\n1. Use functional components\n2. Implement proper error boundaries\n3. Memoize expensive calculations\n4. Keep components small and focused',
    color: 'pink',
    createdAt: daysAgo(1),
    votes: 28,
    userVote: null,
    author: {
      id: '2',
      name: 'Moe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=moe',
    },
  },
  {
    id: 'pub3',
    imageUrl: 'https://picsum.photos/seed/sticky3/400/300',
    content: '# Git Commands Cheatsheet\n\n```bash\ngit stash push -m "message"\ngit stash pop\ngit cherry-pick <commit>\n```\n\nSave this for later! 📝',
    color: 'blue',
    createdAt: daysAgo(3),
    votes: 35,
    userVote: null,
    author: {
      id: '3',
      name: 'Admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    },
  },
  {
    id: 'pub4',
    imageUrl: 'https://picsum.photos/seed/sticky4/400/300',
    content: '# CSS Grid vs Flexbox\n\n- Grid: 2D layouts (rows & columns)\n- Flexbox: 1D layouts (row OR column)\n\nUse Grid for page layouts, Flexbox for components! 🎨',
    color: 'green',
    createdAt: daysAgo(4),
    votes: 21,
    userVote: null,
    author: {
      id: '1',
      name: 'Tony',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tony',
    },
  },
];

// User-specific stickies
export const userStickies: Record<string, Sticky[]> = {
  // Tony's stickies
  '1': [
    {
      id: 'tony1',
      imageUrl: 'https://picsum.photos/seed/tony1/400/300',
      content: '# Project Ideas\n\n- Build a markdown editor\n- Create a task tracker\n- Design a portfolio site\n\nStart with the editor! 💡',
      color: 'yellow',
      createdAt: daysAgo(1),
      votes: 0,
      author: {
        id: '1',
        name: 'Tony',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tony',
      },
    },
    {
      id: 'tony2',
      imageUrl: 'https://picsum.photos/seed/tony2/400/300',
      content: '# Meeting Notes\n\n- Review UI designs\n- Discuss API integration\n- Plan next sprint\n\nDeadline: Next Friday',
      color: 'pink',
      createdAt: daysAgo(2),
      votes: 0,
      author: {
        id: '1',
        name: 'Tony',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tony',
      },
    },
  ],
  // Moe's stickies
  '2': [
    {
      id: 'moe1',
      imageUrl: 'https://picsum.photos/seed/moe1/400/300',
      content: '# Bug Fixes\n\n- Fix navigation menu\n- Update user settings\n- Resolve login issues\n\nPriority: High ⚠️',
      color: 'blue',
      createdAt: daysAgo(1),
      votes: 0,
      author: {
        id: '2',
        name: 'Moe',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=moe',
      },
    },
    {
      id: 'moe2',
      imageUrl: 'https://picsum.photos/seed/moe2/400/300',
      content: '# Learning Resources\n\n- TypeScript handbook\n- React testing guide\n- GraphQL tutorials\n\nStart with TypeScript! 📚',
      color: 'green',
      createdAt: daysAgo(3),
      votes: 0,
      author: {
        id: '2',
        name: 'Moe',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=moe',
      },
    },
  ],
  // Admin's stickies
  '3': [
    {
      id: 'admin1',
      imageUrl: 'https://picsum.photos/seed/admin1/400/300',
      content: '# System Updates\n\n- Upgrade Node.js\n- Update dependencies\n- Security patches\n\nScheduled: This weekend 🔧',
      color: 'yellow',
      createdAt: daysAgo(1),
      votes: 0,
      author: {
        id: '3',
        name: 'Admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      },
    },
    {
      id: 'admin2',
      imageUrl: 'https://picsum.photos/seed/admin2/400/300',
      content: '# Team Guidelines\n\n1. Code review process\n2. Git workflow\n3. Deployment checklist\n\nShare with new members! 📋',
      color: 'pink',
      createdAt: daysAgo(2),
      votes: 0,
      author: {
        id: '3',
        name: 'Admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      },
    },
  ],
};