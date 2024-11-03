import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Layout/Container';
import { RegisterForm } from '@/components/Auth/RegisterForm';
import styled from 'styled-components';

const RegisterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
`;

const LoginLink = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

export const Register = () => {
  return (
    <RegisterContainer size="small">
      <RegisterForm />
      <LoginLink>
        Already have an account? <Link to="/login">Login here</Link>
      </LoginLink>
    </RegisterContainer>
  );
};