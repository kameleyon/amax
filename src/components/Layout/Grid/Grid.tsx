import React from 'react';
import { GridContainer, GridItem } from './Grid.styles';
import { GridProps, GridItemProps } from './Grid.types';

export const Grid = ({ children, columns, gap, ...props }: GridProps) => {
  return (
    <GridContainer columns={columns} gap={gap} {...props}>
      {children}
    </GridContainer>
  );
};

export const Item = ({ children, span, ...props }: GridItemProps) => {
  return (
    <GridItem span={span} {...props}>
      {children}
    </GridItem>
  );
};