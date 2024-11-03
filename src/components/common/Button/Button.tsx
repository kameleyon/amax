import React from 'react';
import { StyledButton } from './Button.styles';
import { Spinner } from '../Spinner';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $isLoading={isLoading}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Spinner size="small" /> : children}
    </StyledButton>
  );
};