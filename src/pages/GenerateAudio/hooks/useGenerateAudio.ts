import { useState } from 'react';
import { generateWithMistral } from '@/services/mistralService';
import { generateSpeech } from '@/services/voice/voiceService';
import { useVoices } from '@/hooks/useVoices';
import { logger } from '@/utils/logger';

interface GenerateParams {
  content: string;
  category: string;
  tone: string;
  voice: string;
}

export const useGenerateAudio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const { voices, isLoading: isVoicesLoading, error: voicesError, refetch: retryLoadVoices } = useVoices();

  const generateAudio = async (params: GenerateParams) => {
    setIsLoading(true);
    setError(null);

    try {
      const enhancedContent = await generateWithMistral({
        content: params.content,
        category: params.category,
        tone: params.tone
      });

      const audio = await generateSpeech({
        text: enhancedContent,
        voice: params.voice
      });

      setAudioUrl(audio.url);
      return { transcript: enhancedContent };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate audio';
      logger.error('Audio generation failed:', err);
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const regenerateAudio = async (params: GenerateParams) => {
    return generateAudio(params);
  };

  const publishAudio = async ({ content, audioUrl }: { content: string; audioUrl: string }) => {
    if (!audioUrl) {
      setError('No audio available to publish');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Implement publish logic here
      logger.info('Publishing audio', { content, audioUrl });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to publish audio';
      logger.error('Publishing failed:', err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generateAudio,
    regenerateAudio,
    publishAudio,
    isLoading,
    isVoicesLoading,
    error: error || voicesError,
    audioUrl,
    voices,
    retryLoadVoices
  };
};