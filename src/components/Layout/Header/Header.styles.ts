import styled from 'styled-components';

export const HeaderContainer = styled.header`
 
  
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 3rem ${({ theme }) => theme.spacing.xl}; // Increased padding for logo spacing
`;

export const Logo = styled.h1`
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;