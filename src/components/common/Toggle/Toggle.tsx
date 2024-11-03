import React from 'react';
import { ToggleContainer, ToggleInput, ToggleSlider } from './Toggle.styles';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  disabled = false,
  className,
  label
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <ToggleContainer className={className} disabled={disabled}>
      <ToggleInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={label}
      />
      <ToggleSlider checked={checked} disabled={disabled} />
    </ToggleContainer>
  );
};