import React from 'react';
import { Controls, VolumeControl } from './styles';
import { AudioControlsProps } from './types';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';

export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlayPause,
  volume,
  onVolumeChange,
}) => {
  return (
    <Controls>
      <Button 
        variant="icon"
        onClick={onPlayPause}
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
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          aria-label="Volume"
        />
      </VolumeControl>
    </Controls>
  );
};