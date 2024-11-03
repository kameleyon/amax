import {
  useQuery as useReactQuery,
  useMutation as useReactMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryKey,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { logger } from '@/utils/logger';

export function useQuery<TData = unknown, TError = AxiosError>(
  key: QueryKey,
  fetcher: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError, TData>, 'queryKey' | 'queryFn'>
) {
  return useReactQuery<TData, TError>({
    queryKey: key,
    queryFn: async () => {
      try {
        return await fetcher();
      } catch (error) {
        logger.error(`Query error for key ${key}:`, error);
        throw error;
      }
    },
    ...options,
  });
}

export function useMutation<TData = unknown, TError = AxiosError, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>
) {
  return useReactMutation<TData, TError, TVariables>({
    mutationFn: async (variables) => {
      try {
        return await mutationFn(variables);
      } catch (error) {
        logger.error('Mutation error:', error);
        throw error;
      }
    },
    ...options,
  });
}