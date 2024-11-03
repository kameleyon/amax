import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Container } from '@/components/Layout/Container';
import {
  AuthContainer,
  AuthCard,
  AuthHeader,
  AuthDescription
} from './AuthPage.styles';

export const AuthPage = () => {
  return (
    <Container>
      <AuthContainer>
        <AuthCard>
          <AuthHeader>Welcome to AudioMax</AuthHeader>
          <AuthDescription>
            Sign in to access your audio content and voice generation tools
          </AuthDescription>
          
          <SignIn 
            routing="path" 
            path="/sign-in"
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                rootBox: 'w-full flex justify-center items-center min-h-screen bg-[#213b55]', // Dark teal background to fill the viewport
                card: 'bg-[#c1e8e6] shadow-md border rounded-lg p-8', // Light teal background for the sign-in card, centered with a shadow effect
                headerTitle: 'text-2xl font-bold',
                headerSubtitle: 'text-gray-600',
                formButtonPrimary: 'bg-primary hover:bg-primary-dark',
                socialButtonsBlockButton: 'border-gray-200 hover:bg-gray-50',
                formFieldInput: 'rounded-md border-gray-200',
                footer: 'hidden'
              },
            }}
          />
        </AuthCard>
      </AuthContainer>
    </Container>
  );
};