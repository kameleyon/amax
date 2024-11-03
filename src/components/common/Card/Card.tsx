import React from 'react';
import { CardContainer, CardTitle, CardContent } from './Card.styles';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  className,
  onClick,
  variant = 'default',
  padding = 'medium',
  fullWidth = false
}) => {
  return (
    <CardContainer 
      className={className} 
      onClick={onClick}
      $variant={variant}
      $padding={padding}
      $fullWidth={fullWidth}
    >
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};