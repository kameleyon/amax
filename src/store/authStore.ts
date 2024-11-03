import { create } from 'zustand';
import { AuthState, LoginCredentials, RegisterCredentials } from '@/types/auth';
import { authService } from '@/services/authService';
import { logger } from '@/utils/logger';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      const user = await authService.login({ email, password });
      set({ user, isAuthenticated: true });
      logger.info('User logged in successfully', { email });
    } catch (error) {
      logger.error('Login failed', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      await authService.logout();
      set({ user: null, isAuthenticated: false });
      logger.info('User logged out successfully');
    } catch (error) {
      logger.error('Logout failed', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email: string, password: string, name: string) => {
    try {
      set({ isLoading: true });
      const user = await authService.register({ email, password, name });
      set({ user, isAuthenticated: true });
      logger.info('User registered successfully', { email });
    } catch (error) {
      logger.error('Registration failed', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));