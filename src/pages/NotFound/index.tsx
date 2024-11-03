import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Layout/Container';
import { Button } from '@/components/common/Button';

const NotFoundContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404 - Page Not Found</Title>
      <Description>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </Description>
      <Button as={Link} to="/" variant="primary">
        Go Back Home
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;