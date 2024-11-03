import React from 'react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { ProfileForm } from '@/components/Profile/ProfileForm';
import { ProfileSettings } from '@/components/Profile/ProfileSettings';
import styled from 'styled-components';

const ProfileContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Profile = () => {
  return (
    <ProfileContainer>
      <Card title="Profile">
        <ProfileForm />
      </Card>
      <ProfileSettings />
    </ProfileContainer>
  );
};