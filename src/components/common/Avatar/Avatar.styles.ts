import styled, { css } from 'styled-components';
import { AvatarStyleProps } from './Avatar.types';

const sizes = {
  small: css`
    width: 32px;
    height: 32px;
  `,
  medium: css`
    width: 48px;
    height: 48px;
  `,
  large: css`
    width: 96px;
    height: 96px;
  `,
};

export const StyledAvatar = styled.img<AvatarStyleProps>`
  border-radius: 50%;
  object-fit: cover;
  ${({ $size = 'medium' }) => sizes[$size]}
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;