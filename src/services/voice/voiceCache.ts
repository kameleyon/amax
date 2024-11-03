import { Voice } from './types';

class VoiceCache {
  private cache: Map<string, Voice[]>;
  private ttl: number;

  constructor(ttl = 1000 * 60 * 60) { // 1 hour default TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  set(key: string, voices: Voice[]): void {
    this.cache.set(key, voices);
    
    // Automatically clear cache after TTL
    setTimeout(() => {
      this.cache.delete(key);
    }, this.ttl);
  }

  get(key: string): Voice[] | null {
    return this.cache.get(key) || null;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const voiceCache = new VoiceCache();