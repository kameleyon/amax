import { api } from './config';
import { logger } from '@/utils/logger';

// Default voices as fallback
export const DEFAULT_VOICES = [
  { value: 'en-US-Neural2-A', label: 'US English - Female (Neural)' },
  { value: 'en-US-Neural2-B', label: 'US English - Male (Neural)' },
  { value: 'en-GB-Neural2-A', label: 'British English - Female (Neural)' },
  { value: 'en-GB-Neural2-B', label: 'British English - Male (Neural)' }
];

// Cache voices to avoid unnecessary API calls
let cachedVoices: Array<{ value: string; label: string }> | null = null;

export const getVoices = async () => {
  // Return cached voices if available
  if (cachedVoices) {
    return cachedVoices;
  }

  try {
    logger.info('Fetching voices from Play.ht API');
    
    const response = await api.get('/voices', {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.data?.voices?.length) {
      logger.warn('Empty voice list from API, using defaults');
      return DEFAULT_VOICES;
    }

    cachedVoices = response.data.voices.map((voice: any) => ({
      value: voice.id,
      label: `${voice.name} (${voice.language})`
    }));

    logger.info(`Successfully cached ${cachedVoices.length} voices`);
    return cachedVoices;

  } catch (error) {
    logger.error('Failed to fetch voices:', error);
    return DEFAULT_VOICES;
  }
};