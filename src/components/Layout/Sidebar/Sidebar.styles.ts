import styled from 'styled-components';
import { fadeIn, slideIn } from '@/styles/animations';

export const MenuButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(90deg)' : 'none'};
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: ${({ theme }) => theme.colors.background.primary};
  opacity: 0.85;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 1;
  animation: ${slideIn} 0.3s ease;
`;

export const SidebarContent = styled.div`
  padding: 6rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
  border: none;
  background: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const MenuIcon = styled.span`
  font-size: 1.25rem;
  width: 24px;
  text-align: center;
`;

export const MenuText = styled.span`
  font-size: 1rem;
`;

export const LogoutButton = styled(MenuItem)`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.error};

  &:hover {
    background: ${({ theme }) => `${theme.colors.error}15`};
  }
`;