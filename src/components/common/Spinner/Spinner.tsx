import React from 'react';
import { SpinnerContainer, SpinnerDot } from './Spinner.styles';
import { SpinnerProps } from './Spinner.types';

export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium' }) => {
  return (
    <SpinnerContainer>
      <SpinnerDot $size={size} />
    </SpinnerContainer>
  );
};