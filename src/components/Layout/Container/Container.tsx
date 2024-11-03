import React from 'react';
import { ContainerProps } from './Container.types';
import { StyledContainer } from './Container.styles';

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  fluid = false,
  maxWidth = 'lg',
  padding = 'medium'
}) => {
  return (
    <StyledContainer
      className={className}
      $fluid={fluid}
      $maxWidth={maxWidth}
      $padding={padding}
    >
      {children}
    </StyledContainer>
  );
};