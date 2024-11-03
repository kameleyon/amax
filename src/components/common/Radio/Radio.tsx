import React from 'react';
import { RadioContainer, RadioInput, RadioLabel } from './Radio.styles';
import { RadioProps } from './Radio.types';

export const Radio = ({
  label,
  checked,
  onChange,
  disabled,
  value,
  ...props
}: RadioProps) => {
  return (
    <RadioContainer>
      <RadioInput
        type="radio"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        value={value}
        {...props}
      />
      {label && <RadioLabel disabled={disabled}>{label}</RadioLabel>}
    </RadioContainer>
  );
};