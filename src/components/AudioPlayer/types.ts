export interface AudioPlayerProps {
  url: string;
  onEnded?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
}

export interface AudioProgressProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
}