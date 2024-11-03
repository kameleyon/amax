export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'none' | 'small' | 'medium' | 'large';
}