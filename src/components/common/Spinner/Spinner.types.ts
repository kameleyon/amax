export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerStyleProps {
  $size: SpinnerSize;
}

export interface SpinnerProps {
  size?: SpinnerSize;
}