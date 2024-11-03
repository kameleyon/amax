import { QueryClient } from '@tanstack/react-query';
import { logger } from '@/utils/logger';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      onError: (error) => {
        logger.error('Query error:', error);
      },
    },
    mutations: {
      retry: 1,
      onError: (error) => {
        logger.error('Mutation error:', error);
      },
    },
  },
});