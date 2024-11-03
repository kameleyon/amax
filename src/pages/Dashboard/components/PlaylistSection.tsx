import React from 'react';
import { Card } from '@/components/common/Card';
import { PlaylistGrid, PlaylistCard, PlaylistTitle, PlaylistCount } from './styles';

const playlists = [
  { id: 1, title: 'Workout Mix', trackCount: 12 },
  { id: 2, title: 'Chill Vibes', trackCount: 8 },
  { id: 3, title: 'Party Hits', trackCount: 15 },
];

export const PlaylistSection = () => {
  return (
    <Card title="Your Playlists">
      <PlaylistGrid>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id}>
            <PlaylistTitle>{playlist.title}</PlaylistTitle>
            <PlaylistCount>{playlist.trackCount} tracks</PlaylistCount>
          </PlaylistCard>
        ))}
      </PlaylistGrid>
    </Card>
  );
};