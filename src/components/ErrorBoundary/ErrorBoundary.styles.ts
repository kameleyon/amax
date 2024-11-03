import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const ErrorHeading = styled.h1`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ReturnButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;