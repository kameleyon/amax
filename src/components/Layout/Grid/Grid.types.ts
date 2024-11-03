export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: string;
  children: React.ReactNode;
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  tabletSpan?: number;
  mobileSpan?: number;
  children: React.ReactNode;
}