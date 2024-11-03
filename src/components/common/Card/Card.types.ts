export interface CardStyleProps {
  $variant?: 'default' | 'primary' | 'secondary';
  $padding?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  padding?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}