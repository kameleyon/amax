import React from 'react';
import styled from 'styled-components';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Form: React.FC<FormProps> = ({ children, className, ...props }) => {
  return (
    <StyledForm className={className} {...props}>
      {children}
    </StyledForm>
  );
};