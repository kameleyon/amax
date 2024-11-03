import styled from 'styled-components';
import { IconStyleProps } from './Icon.types';

export const StyledIcon = styled.span<IconStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => $size ? `${$size}px` : '24px'};
  color: ${({ $color, theme }) => $color || theme.colors.text.primary};
  line-height: 1;
  user-select: none;
  transition: color 0.2s ease;
`;