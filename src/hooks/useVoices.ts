import { useState, useEffect } from 'react';
import { Voice, DEFAULT_VOICES } from '@/services/voice/types';
import { getVoices } from '@/services/voice/voiceService';
import { logger } from '@/utils/logger';

export const useVoices = () => {
  const [voices, setVoices] = useState<Voice[]>(DEFAULT_VOICES);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVoices = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedVoices = await getVoices();
      setVoices(fetchedVoices);
    } catch (err) {
      logger.error('Error fetching voices:', err);
      setError('Unable to load voices. Using default options.');
      // Keep using default voices on error
      setVoices(DEFAULT_VOICES);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVoices();
  }, []);

  return {
    voices,
    isLoading,
    error,
    refetch: fetchVoices
  };
};