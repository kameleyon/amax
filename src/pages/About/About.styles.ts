import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;

  h1 {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme, $active }) => 
    $active ? theme.colors.primary.gradient : 'transparent'};
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
    background: ${({ theme, $active }) => 
      $active ? theme.colors.primary.gradient : theme.colors.background.hover};
    transform: translateY(-1px);
  }
`;

export const ContentSection = styled.div`
  h2 {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h3 {
    margin: ${({ theme }) => `${theme.spacing.xl} 0 ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0 0 ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const ValueCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    display: inline-block;
  }

  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const TeamMember = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateX(4px);
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .placeholder {
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary.gradient};
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: ${({ theme }) => theme.typography.weights.bold};
    }
  }

  .content {
    flex: 1;

    h4 {
      margin: 0;
      color: ${({ theme }) => theme.colors.text.primary};
    }

    span {
      display: block;
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: ${({ theme }) => theme.typography.sizes.sm};
      margin: ${({ theme }) => theme.spacing.xs} 0;
    }

    p {
      margin: 0;
      font-size: ${({ theme }) => theme.typography.sizes.sm};
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

export const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const JobItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateX(4px);
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const JobMeta = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing.xl};

  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  input,
  textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: all ${({ theme }) => theme.transitions.fast};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.main};
      box-shadow: ${({ theme }) => theme.shadows.focus};
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

export const ContactInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;