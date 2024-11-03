import React from 'react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';

export const Help = () => {
  return (
    <Container>
      <Card title="Help & Support">
        <h2>Frequently Asked Questions</h2>
        <p>Common questions and answers about using AudioMax...</p>
        
        <h2>Contact Support</h2>
        <p>Need help? Contact our support team...</p>
      </Card>
    </Container>
  );
};