import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

const renderWithTheme = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Card', () => {
  it('renders children correctly', () => {
    renderWithTheme(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    renderWithTheme(
      <Card title="Test Title">
        <div>Test Content</div>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Card className="custom-class">
        <div>Test Content</div>
      </Card>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});