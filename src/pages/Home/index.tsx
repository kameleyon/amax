import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import styled from 'styled-components';

const HomeContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const WelcomeCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Home = () => {
  return (
    <HomeContainer>
      <WelcomeCard title="Welcome to AudioMax">
        <p>Your premier destination for audio content.</p>
        <ButtonGroup>
          <Button as={Link} to="/sign-in">Sign In</Button>
          <Button as={Link} to="/sign-up" variant="outline">Sign Up</Button>
        </ButtonGroup>
      </WelcomeCard>
    </HomeContainer>
  );
};