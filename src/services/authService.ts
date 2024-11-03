import { User, LoginCredentials, RegisterCredentials } from '@/types/auth';
import { api } from './api';

class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await api.post<User>('/auth/login', credentials);
    this.setToken(response.data.id);
    return response.data;
  }

  async register(credentials: RegisterCredentials): Promise<User> {
    const response = await api.post<User>('/auth/register', credentials);
    this.setToken(response.data.id);
    return response.data;
  }

  async logout(): Promise<void> {
    await api.post('/auth/logout');
    this.removeToken();
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const token = this.getToken();
      if (!token) return null;

      const response = await api.get<User>('/auth/me');
      return response.data;
    } catch {
      this.removeToken();
      return null;
    }
  }

  private setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  private getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  private removeToken(): void {
    localStorage.removeItem('auth_token');
  }
}

export const authService = new AuthService();