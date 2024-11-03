export interface Voice {
  value: string;
  label: string;
  language: string;
  gender?: string;
  quality?: string;
}

export interface VoiceApiResponse {
  voices: Array<{
    id: string;
    name: string;
    value?: string;
    label?: string;
    language: string;
    gender?: string;
    quality?: string;
  }>;
}

export const DEFAULT_VOICES: Voice[] = [
  {
    value: 'en-US-Neural2-A',
    label: 'US English - Female (Neural)',
    language: 'en-US',
    gender: 'female',
    quality: 'neural'
  },
  {
    value: 'en-US-Neural2-B',
    label: 'US English - Male (Neural)',
    language: 'en-US',
    gender: 'male',
    quality: 'neural'
  },
  {
    value: 'en-GB-Neural2-A',
    label: 'British English - Female (Neural)',
    language: 'en-GB',
    gender: 'female',
    quality: 'neural'
  },
  {
    value: 'en-GB-Neural2-B',
    label: 'British English - Male (Neural)',
    language: 'en-GB',
    gender: 'male',
    quality: 'neural'
  }
];