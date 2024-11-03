import styled from 'styled-components';

export const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + span {
    box-shadow: ${({ theme }) => theme.shadows.highlight};
  }
`;

export const ToggleSlider = styled.span<{ checked: boolean; disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme, checked }) => 
    checked ? theme.colors.primary.gradient : theme.colors.background.tertiary};
  border-radius: 34px;
  transition: all ${({ theme }) => theme.transitions.normal};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:before {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background: white;
    border-radius: 50%;
    transition: transform ${({ theme }) => theme.transitions.normal};
    transform: ${({ checked }) => checked ? 'translateX(24px)' : 'translateX(0)'};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:hover:not([disabled]) {
    opacity: 0.9;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 6px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;