import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FooterTitle = styled.h3`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const FooterLink = styled.a`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Copyright = styled.p`
  ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  grid-column: 1 / -1;
  margin: ${({ theme }) => theme.spacing.xl} 0 0;
`;