import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<{
  $variant?: ButtonProps['variant'];
  $size?: ButtonProps['size'];
  $fullWidth?: boolean;
  $isLoading?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  opacity: ${({ $isLoading }) => ($isLoading ? 0.7 : 1)};
  pointer-events: ${({ $isLoading }) => ($isLoading ? 'none' : 'auto')};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    );
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  ${({ theme, $variant = 'primary' }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: ${theme.colors.primary.gradient};
          color: white;
          border: none;
          box-shadow: ${theme.shadows.md};
          
          &:hover {
            box-shadow: ${theme.shadows.lg};
            transform: translateY(-1px);
          }
          
          &:active {
            transform: translateY(0);
            box-shadow: ${theme.shadows.sm};
          }
        `;
      case 'secondary':
        return css`
          background: ${theme.colors.secondary.gradient};
          color: white;
          border: none;
          box-shadow: ${theme.shadows.md};
          
          &:hover {
            box-shadow: ${theme.shadows.lg};
            transform: translateY(-1px);
          }
          
          &:active {
            transform: translateY(0);
            box-shadow: ${theme.shadows.sm};
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.primary.main};
          border: 2px solid ${theme.colors.primary.main};
          box-shadow: none;
          
          &:hover {
            background: ${theme.colors.primary.main}11;
            transform: translateY(-1px);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      default:
        return '';
    }
  }}

  ${({ theme, $size = 'medium' }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.sizes.sm};
        `;
      case 'medium':
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.sizes.base};
        `;
      case 'large':
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.typography.sizes.lg};
        `;
      default:
        return '';
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  svg {
    width: 1.2em;
    height: 1.2em;
  }
`;