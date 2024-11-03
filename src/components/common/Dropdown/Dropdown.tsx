import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownContainer,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from './Dropdown.styles';
import { DropdownProps } from './Dropdown.types';

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <DropdownContainer ref={containerRef} {...props}>
      <DropdownTrigger onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : placeholder}
      </DropdownTrigger>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              isSelected={option.value === value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};