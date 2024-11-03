import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { useThemeStore } from './store/themeStore';

const queryClient = new QueryClient();

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  const { mode } = useThemeStore();

  const currentTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: mode === 'dark' ? {
        primary: '#011319',
        secondary: '#214955',
        tertiary: 'rgba(193, 232, 230, 0.2)',
        disabled: 'rgba(193, 232, 230, 0.5)',
        hover: 'rgba(193, 232, 230, 0.15)',
        active: 'rgba(193, 232, 230, 0.25)',
        gradient: 'radial-gradient(circle at 50% 50%, #011319 0%, #214955 100%)'
      } : {
        ...theme.colors.background,
        primary: '#ffffff',
        gradient: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #c1e8e6 100%)'
      }
    }
  };

  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      appearance={{
        baseTheme: mode === 'dark' ? 'dark' : undefined,
        variables: {
          colorPrimary: '#214955',
          colorBackground: mode === 'dark' ? '#011319' : '#ffffff',
        },
        elements: {
          card: {
            backgroundColor: mode === 'dark' ? '#011319' : '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          formButtonPrimary: {
            backgroundColor: '#214955',
            '&:hover': {
              backgroundColor: '#1a3a43',
            },
          },
          formFieldInput: {
            borderColor: mode === 'dark' ? '#214955' : '#c1e8e6',
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;