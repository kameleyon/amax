export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarStyleProps {
  $size?: AvatarSize;
}

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSize;
  src?: string;
  alt: string;
}