import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, UserButton } from '@clerk/clerk-react';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav
} from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => navigate(isSignedIn ? '/dashboard' : '/')}>
          AudioMax
        </Logo>
        <Nav>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : null}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};