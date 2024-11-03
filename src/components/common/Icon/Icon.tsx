import React from 'react';
import { IconProps } from './Icon.types';
import { StyledIcon } from './Icon.styles';

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color,
  className,
  ...props 
}) => {
  const renderIcon = () => {
    switch (name) {
      case 'play':
        return '▶';
      case 'pause':
        return '⏸';
      case 'volume-up':
        return '🔊';
      case 'volume-off':
        return '🔇';
      case 'next':
        return '⏭';
      case 'previous':
        return '⏮';
      case 'repeat':
        return '🔁';
      case 'shuffle':
        return '🔀';
      default:
        return '•';
    }
  };

  return (
    <StyledIcon 
      $size={size} 
      $color={color}
      className={className}
      {...props}
    >
      {renderIcon()}
    </StyledIcon>
  );
};