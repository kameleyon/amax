export interface ResponsiveWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: 'mobile' | 'tablet' | 'desktop';
  show?: 'mobile' | 'tablet' | 'desktop';
  children: React.ReactNode;
}