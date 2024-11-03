import React from 'react';
import { SelectContainer, StyledSelect, Label, ErrorText } from './Select.styles';
import { SelectProps } from './Select.types';

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  error,
  disabled,
  placeholder,
  fullWidth,
  className,
}) => {
  return (
    <SelectContainer className={className} $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledSelect
        value={value}
        onChange={onChange}
        disabled={disabled}
        $hasError={!!error}
      >
        {placeholder && (
          <option key="placeholder" value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
  <option key={option.id || index} value={option.value}>
    {option.label}
  </option>
))}
      </StyledSelect>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectContainer>
  );
};