import React from 'react';
import { StyledAvatar } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

export const Avatar = ({ src, alt, size = 'medium', ...props }: AvatarProps) => {
  return (
    <StyledAvatar
      src={src}
      alt={alt}
      $size={size}
      {...props}
    />
  );
};