import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { logger } from '@/utils/logger';

class ApiClient {
  private static instance: ApiClient;
  private api: AxiosInstance;
  private retryCount: number = 3;
  private retryDelay: number = 1000;

  private constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        logger.error('API Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor with retry logic
    this.api.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const config = error.config as AxiosRequestConfig & { _retry?: number };
        
        if (!config || !error.response) {
          // Network error or no response
          if (!config?._retry || config._retry < this.retryCount) {
            config._retry = (config._retry || 0) + 1;
            logger.warn(`Retrying request (${config._retry}/${this.retryCount})`);
            
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, this.retryDelay));
            return this.api(config);
          }
        }

        if (error.response?.status === 401) {
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
        }

        logger.error('API Response Error:', {
          status: error.response?.status,
          data: error.response?.data,
          url: config?.url
        });

        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.api.get<T>(url, config);
      return response;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    try {
      const response = await this.api.post<T>(url, data, config);
      return response;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    try {
      const response = await this.api.put<T>(url, data, config);
      return response;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.api.delete<T>(url, config);
      return response;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: unknown): void {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        // Network error
        logger.error('Network Error:', {
          message: error.message,
          code: error.code
        });
      } else {
        // Server error
        logger.error('Server Error:', {
          status: error.response.status,
          data: error.response.data
        });
      }
    } else {
      logger.error('Unknown Error:', error);
    }
  }
}

export const api = ApiClient.getInstance();