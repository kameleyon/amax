import React, { useState, useRef, useEffect } from 'react';
import { PlayerContainer, Controls, ProgressBar, Progress, TimeDisplay, VolumeControl } from './AudioPlayer.styles';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import { formatTime } from '@/utils/formatTime';

export interface AudioPlayerProps {
  url: string;
  onEnded?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  url,
  onEnded,
  onPlay,
  onPause,
  autoPlay = false,
  loop = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      onPause?.();
    } else {
      audioRef.current.play();
      onPlay?.();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    handleSeek(percentage * duration);
  };

  return (
    <PlayerContainer>
      <audio
        ref={audioRef}
        src={url}
        autoPlay={autoPlay}
        loop={loop}
      />
      
      <Controls>
        <Button 
          variant="icon"
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <Icon name={isPlaying ? 'pause' : 'play'} size={24} />
        </Button>

        <VolumeControl>
          <Icon name={volume === 0 ? 'volume-off' : 'volume-up'} size={20} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            aria-label="Volume"
          />
        </VolumeControl>
      </Controls>

      <div>
        <ProgressBar onClick={handleProgressClick}>
          <Progress style={{ width: `${(currentTime / duration) * 100 || 0}%` }} />
        </ProgressBar>
        <TimeDisplay>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </TimeDisplay>
      </div>
    </PlayerContainer>
  );
};