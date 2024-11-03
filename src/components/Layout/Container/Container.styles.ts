import styled from 'styled-components';
import { Theme } from '@/types/theme';

interface StyledContainerProps {
  $fluid: boolean;
  $maxWidth: 'sm' | 'md' | 'lg' | 'xl';
  $padding: 'none' | 'small' | 'medium' | 'large';
}

const getMaxWidth = (maxWidth: string) => {
  const sizes = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  };
  return sizes[maxWidth as keyof typeof sizes];
};

const getPadding = (padding: string) => {
  const sizes = {
    none: '0',
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  };
  return sizes[padding as keyof typeof sizes];
};

export const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ $padding }) => getPadding($padding)};
  padding-right: ${({ $padding }) => getPadding($padding)};
  max-width: ${({ $fluid, $maxWidth }) => $fluid ? '100%' : getMaxWidth($maxWidth)};
`;