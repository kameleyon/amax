import React from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled,
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        {...props}
      />
      {label && <CheckboxLabel disabled={disabled}>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};