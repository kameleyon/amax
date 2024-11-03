import styled from 'styled-components';

// Stats Grid Components
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const StatValue = styled.div`
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const StatLabel = styled.div`
  ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// Upload Section Components
export const UploadArea = styled.div<{ $isDragging: boolean }>`
  border: 2px dashed ${({ theme, $isDragging }) =>
    $isDragging ? theme.colors.primary : theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ theme, $isDragging }) =>
    $isDragging ? `${theme.colors.primary}0a` : 'transparent'};
`;

export const UploadIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const UploadText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

// Track List Components
export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const TrackItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.tertiary};
  }
`;

export const TrackInfo = styled.div`
  flex: 1;
`;

export const TrackTitle = styled.h4`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`;

export const TrackMeta = styled.p`
  ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

// Playlist Components
export const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PlaylistCard = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.background.tertiary};
  }
`;

export const PlaylistTitle = styled.h4`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const PlaylistCount = styled.p`
  ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;