import React from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import styled from 'styled-components';

const DashboardContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
`;

const WelcomeCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Dashboard = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <DashboardContainer>
      <WelcomeCard title="Dashboard">
        <h2>Welcome, {user?.firstName}!</h2>
        <p>You are now logged in to your account.</p>
        <ActionButtons>
          <Button onClick={() => signOut()}>Logout</Button>
        </ActionButtons>
      </WelcomeCard>
    </DashboardContainer>
  );
};