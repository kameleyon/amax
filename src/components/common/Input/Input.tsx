import React from 'react';
import {
  InputContainer,
  InputLabel,
  StyledInput,
  StyledTextArea,
  ErrorMessage,
} from './Input.styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  multiline?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  multiline = false,
  ...props
}) => {
  const InputComponent = multiline ? StyledTextArea : StyledInput;

  return (
    <InputContainer $fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputComponent $hasError={!!error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};