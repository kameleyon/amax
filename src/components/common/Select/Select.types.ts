import { ChangeEvent } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
}