import React from 'react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';

export const About = () => {
  return (
    <Container>
      <Card title="About AudioMax">
        <h2>Our Mission</h2>
        <p>AudioMax is dedicated to revolutionizing audio content creation through AI technology...</p>
        
        <h2>The Team</h2>
        <p>Meet the team behind AudioMax...</p>
        
        <h2>Contact Us</h2>
        <p>Get in touch with us...</p>
      </Card>
    </Container>
  );
};