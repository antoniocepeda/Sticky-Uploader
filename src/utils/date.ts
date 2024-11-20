import { formatDistance, formatRelative, format } from 'date-fns';

export const formatDate = (date: Date) => {
  return format(date, 'PPP');
};

export const formatRelativeDate = (date: Date) => {
  return formatRelative(date, new Date());
};

export const formatTimeAgo = (date: Date) => {
  return formatDistance(date, new Date(), { addSuffix: true });
};