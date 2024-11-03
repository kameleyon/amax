import React, { useState, useRef, useEffect } from 'react';
import { 
  DropdownContainer,
  DropdownTrigger,
  DropdownList,
  DropdownItem,
  Label,
  ErrorText
} from './CustomDropdown.styles';
import { CustomDropdownProps } from './CustomDropdown.types';

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange({ target: { value: optionValue } } as React.ChangeEvent<HTMLSelectElement>);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={containerRef} className={className} $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <DropdownTrigger
        onClick={() => !disabled && setIsOpen(!isOpen)}
        $isOpen={isOpen}
        $hasError={!!error}
        $disabled={disabled}
      >
        {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
      </DropdownTrigger>
      {isOpen && !disabled && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option.value)}
              $isSelected={option.value === value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </DropdownContainer>
  );
};