import axios from 'axios';
import { logger } from '@/utils/logger';

// API Configuration
const USER_ID = '3I0uk4sKefXqOKsu6Yb9DDIfGrg1';
const API_KEY = 'f64bd73af7fa48d4a831e752a6affc74';
const API_URL = 'https://api.play.ht/api/v2';

export interface Voice {
  value: string;
  label: string;
}

export const DEFAULT_VOICES: Voice[] = [
  { value: 'en-US-Neural2-A', label: 'US English - Female (Neural)' },
  { value: 'en-US-Neural2-B', label: 'US English - Male (Neural)' },
  { value: 'en-GB-Neural2-A', label: 'British English - Female (Neural)' },
  { value: 'en-GB-Neural2-B', label: 'British English - Male (Neural)' }
];

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': API_KEY,
    'X-User-ID': USER_ID,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Adding retry mechanism to axios instance
api.interceptors.response.use(undefined, async (error) => {
  const { config, response } = error;
  if (!config || !response || response.status >= 500 || error.message === 'Network Error') {
    // Retry mechanism for network errors or 5xx server errors
    config.retryCount = config.retryCount || 0;
    if (config.retryCount < 3) {
      config.retryCount += 1;
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait before retrying
      return api(config);
    }
  }
  return Promise.reject(error);
});

let cachedVoices: Voice[] | null = null;

export const getVoices = async (): Promise<Voice[]> => {
  try {
    if (cachedVoices) {
      return cachedVoices;
    }

    const response = await api.get('/voices');

    if (!response.data?.voices) {
      logger.warn('No voices returned from API, using defaults');
      return DEFAULT_VOICES;
    }

    cachedVoices = response.data.voices.map((voice: any) => ({
      value: voice.id,
      label: `${voice.name} (${voice.language})`
    }));

    return cachedVoices;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logger.error('Network error while fetching voices:', error.message);
      if (error.response) {
        logger.error('Response status:', error.response.status);
        logger.error('Response data:', error.response.data);
      } else if (error.request) {
        logger.error('No response received:', error.request);
      } else {
        logger.error('Network Error:', error.message);
      }
    } else {
      logger.error('Unexpected error:', error);
    }
    return DEFAULT_VOICES;
  }
};

export interface GenerateSpeechParams {
  text: string;
  voice: string;
}

export interface GenerateSpeechResponse {
  url: string;
  duration: number;
}

export const generateSpeech = async (params: GenerateSpeechParams): Promise<GenerateSpeechResponse> => {
  try {
    const response = await api.post('/tts/stream', {
      text: params.text,
      voice: params.voice,
      output_format: 'mp3',
      quality: 'high'
    }, {
      headers: {
        ...api.defaults.headers,
        'Accept': 'audio/mpeg'
      }
    });

    if (!response.data?.url) {
      throw new Error('Invalid response from speech generation API');
    }

    return {
      url: response.data.url,
      duration: response.data.duration || 0
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logger.error('Axios error during speech generation:', error.message);
      if (error.response) {
        logger.error('Response status:', error.response.status);
        logger.error('Response data:', error.response.data);
      } else if (error.request) {
        logger.error('No response received from server:', error.request);
      } else {
        logger.error('Network Error:', error.message);
      }
    } else {
      logger.error('Unexpected error during speech generation:', error);
    }
    throw new Error('Failed to generate speech. Please try again.');
  }
};

export const clearVoiceCache = (): void => {
  cachedVoices = null;
};
