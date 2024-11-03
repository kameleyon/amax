import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownTrigger = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
`;

export const DropdownItem = styled.div<{ isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? `${theme.colors.primary}1a` : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}1a`};
  }
`;