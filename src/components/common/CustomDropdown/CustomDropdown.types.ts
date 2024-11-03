import { SelectOption } from '../Select/Select.types';

export interface CustomDropdownProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
}