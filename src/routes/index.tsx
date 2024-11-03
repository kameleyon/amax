import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/Home/HomePage';
import { Dashboard } from '@/pages/Dashboard/Dashboard';
import { GenerateAudio } from '@/pages/GenerateAudio/GenerateAudio';
import { VoiceCloning } from '@/pages/VoiceCloning/VoiceCloning';
import { Files } from '@/pages/Files/Files';
import { Settings } from '@/pages/Settings/Settings';
import { Notifications } from '@/pages/Notifications/Notifications';
import { Help } from '@/pages/Help/Help';
import { About } from '@/pages/About/About';
import { NotFound } from '@/pages/NotFound/NotFound';
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute';
import { SignInPage } from '@/pages/Auth/SignInPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'generate',
        element: (
          <ProtectedRoute>
            <GenerateAudio />
          </ProtectedRoute>
        ),
      },
      {
        path: 'voice-cloning',
        element: (
          <ProtectedRoute>
            <VoiceCloning />
          </ProtectedRoute>
        ),
      },
      {
        path: 'files',
        element: (
          <ProtectedRoute>
            <Files />
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: 'notifications',
        element: (
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        ),
      },
      {
        path: 'help',
        element: <Help />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);