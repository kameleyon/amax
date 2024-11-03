export type IconName = 
  | 'play' 
  | 'pause' 
  | 'volume-up' 
  | 'volume-off'
  | 'next'
  | 'previous'
  | 'repeat'
  | 'shuffle';

export interface IconStyleProps {
  $size?: number;
  $color?: string;
}

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}