import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Layout/Container';
import { LoginForm } from '@/components/Auth/LoginForm';
import styled from 'styled-components';

const LoginContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
`;

const RegisterLink = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

export const Login = () => {
  return (
    <LoginContainer size="small">
      <LoginForm />
      <RegisterLink>
        Don't have an account? <Link to="/register">Register here</Link>
      </RegisterLink>
    </LoginContainer>
  );
};