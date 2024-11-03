import axios from 'axios';
import { logger } from '@/utils/logger';
import { Voice, VoiceApiResponse, DEFAULT_VOICES } from './types';
import { voiceCache } from './voiceCache';
import { API_CONFIG, getApiCredentials } from './config';

// Create API instance with credentials
const createApi = () => {
  try {
    return axios.create({
      ...API_CONFIG,
      ...getApiCredentials()
    });
  } catch (error) {
    logger.error('Failed to create API instance:', error);
    return null;
  }
};

const api = createApi();

export const getVoices = async (): Promise<Voice[]> => {
  try {
    // Check if API instance was created successfully
    if (!api) {
      logger.warn('API not initialized, using default voices');
      return DEFAULT_VOICES;
    }

    // Try cache first
    const cachedVoices = voiceCache.get('voices');
    if (cachedVoices?.length) {
      return cachedVoices;
    }

    const response = await api.get<VoiceApiResponse>('/voices');
    
    if (!response.data?.voices?.length) {
      return DEFAULT_VOICES;
    }

    const voices = response.data.voices.map(voice => ({
      value: voice.value || voice.id,
      label: `${voice.label || voice.name} (${voice.language})`,
      language: voice.language,
      gender: voice.gender,
      quality: voice.quality
    }));

    voiceCache.set('voices', voices);
    return voices;
  } catch (error) {
    logger.error('Failed to fetch voices:', error);
    return DEFAULT_VOICES;
  }
};

interface GenerateSpeechParams {
  text: string;
  voice: string;
}

interface GenerateSpeechResponse {
  url: string;
  duration: number;
}

export const generateSpeech = async (params: GenerateSpeechParams): Promise<GenerateSpeechResponse> => {
  if (!api) {
    throw new Error('API not initialized');
  }

  try {
    const response = await api.post<GenerateSpeechResponse>('/tts/stream', {
      text: params.text,
      voice: params.voice,
      output_format: 'mp3',
      quality: 'high'
    }, {
      headers: {
        ...getApiCredentials().headers,
        'Accept': 'audio/mpeg'
      },
      timeout: 30000
    });

    if (!response.data?.url) {
      throw new Error('Invalid response from speech generation API');
    }

    return {
      url: response.data.url,
      duration: response.data.duration || 0
    };
  } catch (error) {
    logger.error('Speech generation failed:', error);
    throw new Error('Failed to generate speech. Please try again.');
  }
};

export const clearVoiceCache = (): void => {
  voiceCache.clear();
};