export const accessibilityConfig = {
  // ARIA landmark roles
  landmarks: {
    navigation: 'navigation',
    main: 'main',
    complementary: 'complementary',
    contentinfo: 'contentinfo',
    search: 'search',
  },

  // Keyboard navigation
  keyboardShortcuts: {
    skipToMain: 'Alt + 1',
    skipToNav: 'Alt + 2',
    skipToSearch: 'Alt + 3',
  },

  // Focus management
  focus: {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: '#007AFF',
    outlineOffset: '2px',
  },

  // Animation preferences
  animation: {
    reducedMotion: {
      enabled: true,
      duration: '0.15s',
    },
    standard: {
      duration: '0.3s',
      easing: 'ease-in-out',
    },
  },

  // Color contrast
  contrast: {
    minimum: 4.5, // WCAG AA standard
    enhanced: 7, // WCAG AAA standard
  },

  // Text sizing
  typography: {
    minFontSize: '16px',
    lineHeight: 1.5,
    paragraphSpacing: '1.5em',
  },
};