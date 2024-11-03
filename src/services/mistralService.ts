import axios from 'axios';
import { logger } from '@/utils/logger';

// Create Mistral API instance
const mistralApi = axios.create({
  baseURL: 'https://api.mistral.ai/v1',
  timeout: 30000,
  headers: {
    'Authorization': `Bearer CjjTMymWObIhUT92in4Rj8gtfY0CNbbs`,
    'Content-Type': 'application/json'
  }
});

interface GenerateParams {
  content: string;
  category: string;
  tone: string;
}

export const generateWithMistral = async (params: GenerateParams): Promise<string> => {
  try {
    logger.info('Generating content with Mistral AI', {
      category: params.category,
      tone: params.tone
    });

    const prompt = `
      Convert the following text into a ${params.category}-style conversation with a ${params.tone} tone:
      
      "${params.content}"
      
      Make it engaging and natural for audio content. Add appropriate pacing and transitions.
      Keep the style consistent and maintain a natural flow.
    `;

    const response = await mistralApi.post('/generate', {
      model: 'mistral-7b',
      prompt,
      max_tokens: 1000,
      temperature: 0.7,
      top_p: 0.9
    });

    if (!response.data?.text) {
      throw new Error('Invalid response from Mistral API');
    }

    const generatedContent = response.data.text.trim();
    logger.info('Content generated successfully');
    
    return generatedContent;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.error?.message || error.message;
      
      logger.error('Mistral API error', {
        status,
        message,
        error
      });

      if (status === 401) {
        throw new Error('Invalid API key. Please check your Mistral API credentials.');
      }
      
      if (status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
    }

    logger.error('Content generation failed', error);
    throw new Error('Failed to generate content - please try again');
  }
};
