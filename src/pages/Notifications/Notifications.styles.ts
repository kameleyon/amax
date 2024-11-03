import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryTab = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme, $active }) => 
    $active ? theme.colors.primary.gradient : 'transparent'};
  color: ${({ theme, $active }) => 
    $active ? 'white' : theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${({ theme, $active }) => 
      $active ? theme.colors.primary.gradient : theme.colors.background.hover};
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const UpdatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const UpdateItem = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateX(4px);
    background: ${({ theme }) => theme.colors.background.tertiary};
  }
`;

export const UpdateMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};

  > div {
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const UpdateContent = styled.div`
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    white-space: pre-line;
  }
`;

export const CategoryBadge = styled.span<{ $category: string }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme, $category }) => {
    switch ($category) {
      case 'announcements':
        return theme.colors.primary.gradient;
      case 'office-hours':
        return theme.colors.secondary.gradient;
      case 'changelog':
        return theme.colors.warning.gradient;
      default:
        return theme.colors.background.gradient;
    }
  }};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  text-transform: capitalize;
`;

export const SettingsButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme, $active }) => 
    $active ? theme.colors.primary.gradient : 'transparent'};
  color: ${({ theme, $active }) => 
    $active ? 'white' : theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.gradient};
    color: white;
    transform: rotate(30deg);
  }
`;

export const NotificationSettings = styled.div`
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const SettingsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  > div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .slider {
        background: ${({ theme }) => theme.colors.primary.gradient};
      }

      &:checked + .slider:before {
        transform: translateX(24px);
      }
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.background.tertiary};
      transition: 0.4s;
      border-radius: 34px;

      &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    }
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