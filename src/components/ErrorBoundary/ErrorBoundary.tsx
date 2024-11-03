import React from 'react';
import { useRouteError } from 'react-router-dom';
import { ErrorContainer, ErrorHeading, ErrorMessage, ReturnButton } from './ErrorBoundary.styles';

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  return (
    <ErrorContainer>
      <ErrorHeading>Oops! Something went wrong</ErrorHeading>
      <ErrorMessage>{error.message || 'An unexpected error occurred'}</ErrorMessage>
      <ReturnButton onClick={() => window.location.href = '/'}>
        Return to Home
      </ReturnButton>
    </ErrorContainer>
  );
};