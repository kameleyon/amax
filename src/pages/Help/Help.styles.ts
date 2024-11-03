import styled from 'styled-components';

export const HelpContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
    background: ${({ theme }) => theme.colors.primary.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const SearchSection = styled.div`
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

export const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryTab = styled.button<{ $active?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme, $active }) => 
    $active ? theme.colors.primary.gradient : theme.colors.background.secondary};
  color: ${({ theme, $active }) => 
    $active ? 'white' : theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme, $active }) => 
      $active ? theme.colors.primary.gradient : theme.colors.background.hover};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const FAQSection = styled.section`
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FAQItem = styled.div<{ $expanded: boolean }>`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  &:hover {
    transform: translateX(4px);
  }

  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.lg};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    color: ${({ theme }) => theme.colors.text.primary};

    svg {
      color: ${({ theme }) => theme.colors.text.secondary};
      transition: transform ${({ theme }) => theme.transitions.normal};
      transform: ${({ $expanded }) => $expanded ? 'rotate(90deg)' : 'none'};
    }
  }

  .answer {
    padding: ${({ theme }) => theme.spacing.lg};
    padding-top: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
    border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  }
`;

export const GuideSection = styled.section`
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const GuideCard = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  color: inherit;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.background.tertiary};

    svg:last-child {
      transform: translateX(4px);
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary.gradient};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    color: white;
  }

  .content {
    flex: 1;
    min-width: 0;

    h4 {
      margin: 0 0 ${({ theme }) => theme.spacing.xs};
      font-size: ${({ theme }) => theme.typography.sizes.lg};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    p {
      margin: 0;
      font-size: ${({ theme }) => theme.typography.sizes.sm};
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }

  svg:last-child {
    color: ${({ theme }) => theme.colors.primary.main};
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
`;

export const ContactSection = styled.section`
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ContactCard = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary.gradient};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    color: white;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;

  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;