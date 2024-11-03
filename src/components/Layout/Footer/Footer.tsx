import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  Copyright,
} from './Footer.styles';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>AudioMax</FooterTitle>
          <FooterLink as={Link} to="/about">About Us</FooterLink>
          <FooterLink as={Link} to="/contact">Contact</FooterLink>
          <FooterLink as={Link} to="/careers">Careers</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink as={Link} to="/privacy">Privacy Policy</FooterLink>
          <FooterLink as={Link} to="/terms">Terms of Service</FooterLink>
          <FooterLink as={Link} to="/cookies">Cookie Policy</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </FooterLink>
          <FooterLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </FooterLink>
          <FooterLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </FooterLink>
        </FooterSection>

        <Copyright>© {year} AudioMax. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};