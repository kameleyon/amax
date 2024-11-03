import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Toggle } from '@/components/common/Toggle';
import { useThemeStore } from '@/store/themeStore';
import styled from 'styled-components';

const SettingsContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
`;

const SettingsCard = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.text}1a`};

  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.span`
  font-weight: 500;
`;

const SettingDescription = styled.p`
  color: ${({ theme }) => `${theme.colors.text}99`};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const Settings = () => {
  const { mode, toggleTheme } = useThemeStore();
  const { user } = useUser();
  const [emailNotifications, setEmailNotifications] = React.useState(true);

  const handleEmailNotifications = (checked: boolean) => {
    setEmailNotifications(checked);
    // Here you would typically update the user's preferences in your backend
  };

  return (
    <SettingsContainer>
      <SettingsCard title="Settings">
        <SettingItem>
          <div>
            <SettingLabel>Dark Mode</SettingLabel>
            <SettingDescription>Switch between light and dark themes</SettingDescription>
          </div>
          <Toggle
            checked={mode === 'dark'}
            onChange={toggleTheme}
          />
        </SettingItem>

        <SettingItem>
          <div>
            <SettingLabel>Email Notifications</SettingLabel>
            <SettingDescription>Receive updates and notifications via email</SettingDescription>
          </div>
          <Toggle
            checked={emailNotifications}
            onChange={handleEmailNotifications}
          />
        </SettingItem>

        <SettingItem>
          <div>
            <SettingLabel>Two-Factor Authentication</SettingLabel>
            <SettingDescription>Add an extra layer of security to your account</SettingDescription>
          </div>
          <Toggle
            checked={user?.twoFactorEnabled || false}
            onChange={() => {
              // Implement 2FA toggle logic
            }}
          />
        </SettingItem>
      </SettingsCard>
    </SettingsContainer>
  );
};