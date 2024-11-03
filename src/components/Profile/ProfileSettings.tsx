import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Card } from '@/components/common/Card';
import { Toggle } from '@/components/common/Toggle';
import styled from 'styled-components';

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

export const ProfileSettings = () => {
  const { user } = useUser();
  const [emailNotifications, setEmailNotifications] = React.useState(true);

  return (
    <Card title="Profile Settings">
      <SettingItem>
        <div>
          <SettingLabel>Email Notifications</SettingLabel>
          <SettingDescription>
            Receive updates and notifications via email
          </SettingDescription>
        </div>
        <Toggle
          checked={emailNotifications}
          onChange={setEmailNotifications}
        />
      </SettingItem>

      <SettingItem>
        <div>
          <SettingLabel>Two-Factor Authentication</SettingLabel>
          <SettingDescription>
            Add an extra layer of security to your account
          </SettingDescription>
        </div>
        <Toggle
          checked={user?.twoFactorEnabled || false}
          onChange={() => {
            // Implement 2FA toggle logic
          }}
        />
      </SettingItem>
    </Card>
  );
};