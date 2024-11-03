import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      light: '#c1e8e6', // Light mint
      main: '#214955', // Teal
      dark: '#011319', // Dark background
      gradient: 'linear-gradient(135deg, #c1e8e6 0%, #214955 100%)'
    },
    secondary: {
      light: '#7abfbf', // Light teal
      main: '#214955', // Teal
      dark: '#011319', // Dark background
      gradient: 'linear-gradient(135deg, #7abfbf 0%, #214955 100%)'
    },
    background: {
      primary: '#ffffff', // Light mode background
      secondary: 'rgba(193, 232, 230, 0.1)', // Light mint with opacity
      tertiary: 'rgba(193, 232, 230, 0.2)',
      disabled: 'rgba(193, 232, 230, 0.5)',
      hover: 'rgba(193, 232, 230, 0.15)',
      active: 'rgba(193, 232, 230, 0.25)',
      gradient: 'linear-gradient(135deg, #ffffff 0%, #c1e8e6 100%)'
    },
    text: {
      primary: '#011319', // Dark text for light mode
      secondary: '#214955', // Teal
      tertiary: '#7abfbf', // Light teal
      disabled: 'rgba(193, 232, 230, 0.5)'
    },
    border: {
      primary: 'rgba(193, 232, 230, 0.2)',
      secondary: 'rgba(193, 232, 230, 0.3)'
    },
    error: {
      light: '#ff8a8a',
      main: '#ff5555',
      dark: '#cc4444',
      gradient: 'linear-gradient(135deg, #ff8a8a 0%, #ff5555 100%)'
    },
    success: {
      light: '#7ae7c7',
      main: '#2cc194',
      dark: '#229a76',
      gradient: 'linear-gradient(135deg, #7ae7c7 0%, #2cc194 100%)'
    },
    warning: {
      light: '#ffe08a',
      main: '#ffd055',
      dark: '#cca644',
      gradient: 'linear-gradient(135deg, #ffe08a 0%, #ffd055 100%)'
    }
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px'
  },
  shadows: {
    sm: '0 2px 4px rgba(1, 19, 25, 0.05)',
    md: '0 4px 8px rgba(1, 19, 25, 0.1)',
    lg: '0 8px 16px rgba(1, 19, 25, 0.15)',
    xl: '0 12px 24px rgba(1, 19, 25, 0.2)',
    highlight: '0 0 0 3px rgba(193, 232, 230, 0.4)',
    card: '0 8px 24px rgba(1, 19, 25, 0.1)',
    dropdown: '0 4px 12px rgba(1, 19, 25, 0.15)',
    inner: 'inset 0 2px 4px rgba(1, 19, 25, 0.05)'
  },
  typography: {
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    },
    fonts: {
      primary: "'Montserrat', sans-serif"
    }
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },
  effects: {
    glassmorphism: `
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(193, 232, 230, 0.2);
    `,
    softShadow: `
      box-shadow: 0 8px 24px rgba(1, 19, 25, 0.1);
    `,
    hover: `
      transition: all 150ms ease-in-out;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(1, 19, 25, 0.15);
      }
    `
  }
};