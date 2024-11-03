import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      surface: string;
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        hover: string;
        active: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
      };
      border: {
        primary: string;
        secondary: string;
      };
      error: string;
      success: string;
      warning: string;
    };
    typography: {
      sizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
      weights: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeights: {
        none: number;
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    spacing: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}