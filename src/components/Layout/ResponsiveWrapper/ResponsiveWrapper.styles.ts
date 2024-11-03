import styled, { css } from 'styled-components';
import { ResponsiveWrapperProps } from './ResponsiveWrapper.types';

export const StyledWrapper = styled.div<ResponsiveWrapperProps>`
  ${({ hide }) =>
    hide &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints[hide]}) {
        display: none;
      }
    `}

  ${({ show }) =>
    show &&
    css`
      display: none;
      @media (min-width: ${({ theme }) => theme.breakpoints[show]}) {
        display: block;
      }
    `}
`;