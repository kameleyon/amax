import {
  useInfiniteQuery as useReactInfiniteQuery,
  UseInfiniteQueryOptions,
  QueryKey,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { logger } from '@/utils/logger';

interface PageParam {
  page: number;
  limit: number;
}

export function useInfiniteQuery<TData = unknown, TError = AxiosError>(
  key: QueryKey,
  fetcher: (pageParam: PageParam) => Promise<TData>,
  options?: Omit<
    UseInfiniteQueryOptions<TData, TError, TData, TData, QueryKey>,
    'queryKey' | 'queryFn'
  >
) {
  return useReactInfiniteQuery<TData, TError>({
    queryKey: key,
    queryFn: async ({ pageParam = { page: 1, limit: 10 } }) => {
      try {
        return await fetcher(pageParam);
      } catch (error) {
        logger.error(`Infinite query error for key ${key}:`, error);
        throw error;
      }
    },
    getNextPageParam: (lastPage, allPages) => ({
      page: allPages.length + 1,
      limit: 10,
    }),
    ...options,
  });
}