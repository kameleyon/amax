import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
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

export const SettingsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const SettingSection = styled.section<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  grid-column: ${({ $fullWidth }) => $fullWidth ? '1 / -1' : 'auto'};
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`;

export const SettingInfo = styled.div`
  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.base};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: ${({ theme }) => theme.spacing.xxs} 0 0;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const UsageBar = styled.div<{ $percentage: number; $color: 'primary' | 'warning' | 'error' }>`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  overflow: hidden;

  > div {
    width: ${({ $percentage }) => `${$percentage}%`};
    height: 100%;
    background: ${({ theme, $color }) => theme.colors[$color].gradient};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: width 0.3s ease;
  }
`;

export const UsageInfo = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.base};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  span {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const PlanBadge = styled.div`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.primary.gradient};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

export const BillingInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};

  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.base};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: ${({ theme }) => theme.spacing.xxs} 0;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};

    &:last-child {
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: ${({ theme }) => theme.typography.weights.medium};
    }
  }
`;

export const StorageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const PlanCard = styled.div<{ $current?: boolean }>`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 2px solid ${({ theme, $current }) => 
    $current ? theme.colors.primary.main : 'transparent'};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const PlanPrice = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  span {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    color: ${({ theme }) => theme.colors.primary.main};
  }

  small {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
`;

export const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  svg {
    color: ${({ theme }) => theme.colors.success.main};
  }
`;

export const BillingHistory = styled.div`
  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const BillingHistoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.tertiary};
    transform: translateX(4px);
  }

  span {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  p {
    margin: ${({ theme }) => theme.spacing.xxs} 0 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  small {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.success.main};
  }

  svg {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.hover};
  }
`;