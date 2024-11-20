const PREFIX = 'sticky-uploader';

export const storage = {
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(`${PREFIX}:${key}`);
    return item ? JSON.parse(item) : null;
  },

  set: <T>(key: string, value: T): void => {
    localStorage.setItem(`${PREFIX}:${key}`, JSON.stringify(value));
  },

  remove: (key: string): void => {
    localStorage.removeItem(`${PREFIX}:${key}`);
  },

  clear: (): void => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  },
};