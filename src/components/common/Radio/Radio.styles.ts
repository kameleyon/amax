import styled from 'styled-components';

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:checked {
    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RadioLabel = styled.span<{ disabled?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;