import React from 'react';
import { Card } from '@/components/common/Card';
import { StatsGrid, StatItem, StatValue, StatLabel } from './styles';

export const AudioStats = () => {
  return (
    <Card title="Audio Stats">
      <StatsGrid>
        <StatItem>
          <StatValue>128</StatValue>
          <StatLabel>Total Tracks</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>12.5k</StatValue>
          <StatLabel>Total Plays</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>24</StatValue>
          <StatLabel>Playlists</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>3.2GB</StatValue>
          <StatLabel>Storage Used</StatLabel>
        </StatItem>
      </StatsGrid>
    </Card>
  );
};