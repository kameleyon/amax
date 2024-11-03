import styled from 'styled-components';

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
    background: ${({ theme }) => theme.colors.primary.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: ${({ theme }) => theme.spacing.xs} 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }

  > *:nth-child(1) { grid-column: 1 / -1; }
  > *:nth-child(2) { grid-column: 1 / -1; }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SubscriptionCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  .header {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    svg {
      color: ${({ theme }) => theme.colors.primary.main};
    }

    h3 {
      margin: 0;
      font-size: ${({ theme }) => theme.typography.sizes.xl};
    }
  }
`;

export const UsageStats = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  span {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  small {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const UsageBar = styled.div<{ $percentage: number; $color: 'primary' | 'secondary' }>`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;

  > div {
    width: ${({ $percentage }) => `${$percentage}%`};
    height: 100%;
    background: ${({ theme, $color }) => theme.colors[$color].gradient};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: width 0.3s ease;
  }
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ActivityItem = styled.div<{ $type: 'generation' | 'voice-clone' }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateX(4px);
  }

  > div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    svg {
      color: ${({ theme, $type }) => 
        $type === 'generation' ? theme.colors.primary.main : theme.colors.secondary.main};
    }
  }

  h4 {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  svg:last-child {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const ActivityMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};

  .status {
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    text-transform: capitalize;

    &.completed {
      background: ${({ theme }) => theme.colors.success.gradient};
      color: white;
    }

    &.processing {
      background: ${({ theme }) => theme.colors.warning.gradient};
      color: white;
    }
  }
`;

export const VoiceClonesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const VoiceCloneItem = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  h4 {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .status {
    display: inline-block;
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    text-transform: capitalize;
    margin-top: ${({ theme }) => theme.spacing.xs};

    &.ready {
      background: ${({ theme }) => theme.colors.success.gradient};
      color: white;
    }

    &.training {
      background: ${({ theme }) => theme.colors.warning.gradient};
      color: white;
    }
  }

  small {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;