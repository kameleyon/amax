import styled, { keyframes } from 'styled-components';
import { SpinnerStyleProps } from './Spinner.types';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerDot = styled.div<SpinnerStyleProps>`
  width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '16px';
      case 'large':
        return '32px';
      default:
        return '24px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '16px';
      case 'large':
        return '32px';
      default:
        return '24px';
    }
  }};
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;