export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    theme: 'light' | 'dark';
  };
}

export const users: User[] = [
  {
    id: '1',
    name: 'Tony',
    email: 'tony@sticky.com',
    password: 'chingon',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=tony`,
    preferences: {
      notifications: true,
      emailUpdates: true,
      theme: 'light',
    },
  },
  {
    id: '2',
    name: 'Moe',
    email: 'moe@sticky.com',
    password: 'chingon',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=moe`,
    preferences: {
      notifications: true,
      emailUpdates: false,
      theme: 'dark',
    },
  },
  {
    id: '3',
    name: 'Admin',
    email: 'admin@sticky.com',
    password: 'chingon',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=admin`,
    preferences: {
      notifications: true,
      emailUpdates: true,
      theme: 'light',
    },
  },
];