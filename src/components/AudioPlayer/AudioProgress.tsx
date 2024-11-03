import React from 'react';
import { ProgressBar, Progress, TimeDisplay } from './styles';
import { AudioProgressProps } from './types';
import { formatTime } from '@/utils/formatTime';

export const AudioProgress: React.FC<AudioProgressProps> = ({
  currentTime,
  duration,
  onSeek,
}) => {
  const progressPercentage = (currentTime / duration) * 100 || 0;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    onSeek(percentage * duration);
  };

  return (
    <div>
      <ProgressBar onClick={handleProgressClick}>
        <Progress style={{ width: `${progressPercentage}%` }} />
      </ProgressBar>
      <TimeDisplay>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </TimeDisplay>
    </div>
  );
};