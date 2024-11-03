import React from 'react';
import { Card } from '@/components/common/Card';
import { TrackList, TrackItem, TrackInfo, TrackTitle, TrackMeta } from './styles';

const recentTracks = [
  { id: 1, title: 'Summer Vibes', duration: '3:45', plays: 1234 },
  { id: 2, title: 'Midnight Jazz', duration: '4:20', plays: 856 },
  { id: 3, title: 'Urban Beat', duration: '2:55', plays: 2341 },
];

export const RecentTracks = () => {
  return (
    <Card title="Recent Tracks">
      <TrackList>
        {recentTracks.map((track) => (
          <TrackItem key={track.id}>
            <TrackInfo>
              <TrackTitle>{track.title}</TrackTitle>
              <TrackMeta>
                {track.duration} • {track.plays} plays
              </TrackMeta>
            </TrackInfo>
          </TrackItem>
        ))}
      </TrackList>
    </Card>
  );
};