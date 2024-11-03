import { useCallback } from 'react';
import { useAuthStore } from '@/store/authStore';
import { LoginCredentials, RegisterCredentials } from '@/types/auth';

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, login, logout, register } = useAuthStore();

  const handleLogin = useCallback(
    async (credentials: LoginCredentials) => {
      try {
        await login(credentials.email, credentials.password);
        return true;
      } catch {
        return false;
      }
    },
    [login]
  );

  const handleRegister = useCallback(
    async (credentials: RegisterCredentials) => {
      try {
        await register(credentials.email, credentials.password, credentials.name);
        return true;
      } catch {
        return false;
      }
    },
    [register]
  );

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      return true;
    } catch {
      return false;
    }
  }, [logout]);

  return {
    user,
    isAuthenticated,
    isLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
  };
};