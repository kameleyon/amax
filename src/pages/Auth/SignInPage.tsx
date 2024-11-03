import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.primary};
`;

const SignInWrapper = styled.div`
  width: 100%;
  max-width: 480px;
`;

export const SignInPage = () => {
  return (
    <SignInContainer>
      <SignInWrapper>
        <SignIn 
          routing="path" 
          path="/sign-in" 
          signUpUrl="/sign-up" 
          afterSignInUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary: {
                fontSize: '16px',
                padding: '12px 24px',
              },
              card: {
                border: 'none',
              },
            },
          }}
        />
      </SignInWrapper>
    </SignInContainer>
  );
};