import { logger } from '@/utils/logger';

// Default API configuration
export const API_CONFIG = {
  baseURL: 'https://api.play.ht/api/v2',
  timeout: 10000,
  retries: 2,
  retryDelay: 1000
};

// Get credentials with fallback values
export const getApiCredentials = () => {
  // Default demo credentials
  const defaultApiKey = 'f64bd73af7fa48d4a831e752a6affc74';
  const defaultUserId = '3I0uk4sKefXqOKsu6Yb9DDIfGrg1';

  // Use environment variables or fallback to defaults
  const apiKey = import.meta.env.VITE_PLAYHT_API_KEY || defaultApiKey;
  const userId = import.meta.env.VITE_PLAYHT_USER_ID || defaultUserId;

  if (apiKey === defaultApiKey || userId === defaultUserId) {
    logger.warn('Using demo credentials - not recommended for production');
  }

  return {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'X-User-ID': userId,
      'Content-Type': 'application/json'
    }
  };
};