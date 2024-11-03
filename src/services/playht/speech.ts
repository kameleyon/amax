import { api } from './config';
import { logger } from '@/utils/logger';

interface GenerateSpeechParams {
  text: string;
  voice: string;
}

export const generateSpeech = async (params: GenerateSpeechParams) => {
  try {
    logger.info('Generating speech:', params);

    const payload = {
      text: params.text,
      voice: params.voice,
      output_format: 'mp3',
      quality: 'high'
    };

    // Update headers specifically for audio response
    const response = await api.post('/tts/stream', payload, {
      headers: {
        ...api.defaults.headers,
        'Accept': 'audio/mpeg'
      }
    });

    if (!response.data?.url) {
      throw new Error('Invalid response from speech generation API');
    }

    logger.info('Successfully generated speech');
    
    return {
      url: response.data.url,
      duration: response.data.duration || 0
    };

  } catch (error) {
    logger.error('Speech generation failed:', error);
    throw new Error('Failed to generate speech - please try again');
  }
};