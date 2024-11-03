import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { lightTheme } from '@/styles/theme';

const renderButton = (props = {}) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <Button {...props} />
    </ThemeProvider>
  );
};

describe('Button', () => {
  it('renders correctly', () => {
    renderButton({ children: 'Click me' });
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies disabled state', () => {
    renderButton({ children: 'Click me', disabled: true });
    expect(screen.getByText('Click me')).toBeDisabled();
  });

  it('shows loading state', () => {
    renderButton({ children: 'Click me', isLoading: true });
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle('color: transparent');
  });
});