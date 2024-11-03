import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative; // For absolute positioning of sidebar
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding-top: 60px; // Account for fixed header
  margin-left: 0; // Default margin
  transition: margin-left 0.3s ease;

  // When sidebar is open, add margin
  &.sidebar-open {
    margin-left: 250px;
  }
`;