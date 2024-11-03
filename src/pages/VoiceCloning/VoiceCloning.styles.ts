import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const recording = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
  100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
`;

export const StudioContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const RecordingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const RecordButton = styled.button<{ $isRecording: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  background: ${({ theme, $isRecording }) => 
    $isRecording ? theme.colors.error.gradient : theme.colors.primary.gradient};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  animation: ${({ $isRecording }) => $isRecording ? recording : 'none'} 2s infinite;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const VoiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const VoiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateX(4px);
    background: ${({ theme }) => theme.colors.background.tertiary};
  }
`;

export const VoiceInfo = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  span {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const VoiceActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const IconButton = styled.button<{ $active?: boolean; $danger?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  background: ${({ theme, $active }) => 
    $active ? theme.colors.primary.gradient : 'transparent'};
  color: ${({ theme, $active, $danger }) => 
    $danger ? theme.colors.error.main :
    $active ? 'white' : theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme, $danger }) => 
      $danger ? theme.colors.error.gradient : theme.colors.primary.gradient};
    color: white;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.primary.gradient};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  animation: ${pulse} 2s infinite;
`;