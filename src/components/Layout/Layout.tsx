import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { LayoutContainer, MainContent } from './Layout.styles';

export const Layout = () => {
  const { isSignedIn } = useUser();

  return (
    <LayoutContainer>
      {isSignedIn && <Sidebar />}
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};