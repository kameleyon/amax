import styled from 'styled-components';
import { GridProps, GridItemProps } from './Grid.types';

export const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  gap: ${({ theme, gap = theme.spacing.md }) => gap};
  width: 100%;
`;

export const GridItem = styled.div<GridItemProps>`
  grid-column: span ${({ span = 1 }) => span};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span ${({ tabletSpan, span = 1 }) => tabletSpan || span};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span ${({ mobileSpan, span = 1 }) => mobileSpan || span};
  }
`;