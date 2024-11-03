import React from 'react';
import { StyledWrapper } from './ResponsiveWrapper.styles';
import { ResponsiveWrapperProps } from './ResponsiveWrapper.types';

export const ResponsiveWrapper = ({
  children,
  hide,
  show,
  ...props
}: ResponsiveWrapperProps) => {
  return (
    <StyledWrapper hide={hide} show={show} {...props}>
      {children}
    </StyledWrapper>
  );
};