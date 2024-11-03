import styled from 'styled-components';
import { CardStyleProps } from './Card.types';

export const CardContainer = styled.div<CardStyleProps>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: ${({ theme, $padding = 'medium' }) => {
    switch ($padding) {
      case 'small':
        return theme.spacing.md;
      case 'large':
        return theme.spacing.xxl;
      default:
        return theme.spacing.xl;
    }
  }};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  transition: ${({ theme }) => theme.transitions.normal};
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.colors.primary.gradient;
      case 'secondary':
        return theme.colors.secondary.gradient;
      default:
        return theme.colors.background.gradient;
    }
  }};
  backdrop-filter: blur(8px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const CardContent = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;