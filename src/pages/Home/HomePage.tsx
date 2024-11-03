import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/components/Layout/Container';
import { Button } from '@/components/common/Button';
import {
  HomeContainer,
  HeaderActions,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  FeatureSection,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './HomePage.styles';
import { Brain, Mic, Sparkles, ArrowRight } from 'lucide-react';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/sign-in');
  };

  return (
    <HomeContainer>
      <HeaderActions>
        <Button 
          variant="outline" 
          onClick={() => navigate('/sign-in')}
        >
          Sign In
        </Button>
      </HeaderActions>

      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>
              Personalized AI-Powered Content Creation
            </HeroTitle>
            <HeroSubtitle>
              Generate in your own voice captivating storytelling to thought-provoking TED-style content, create impactful content with ease.
            </HeroSubtitle>
            <Button 
              variant="secondary" 
              size="large"
              onClick={handleGetStarted}
            >
              Get Started <ArrowRight size={20} />
            </Button>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeatureSection>
        <Container>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <Brain size={32} />
              </FeatureIcon>
              <FeatureTitle>AI Content Generation</FeatureTitle>
              <FeatureDescription>
                Transform your ideas into engaging content with our advanced AI technology
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <Mic size={32} />
              </FeatureIcon>
              <FeatureTitle>Voice Personalization</FeatureTitle>
              <FeatureDescription>
                Clone your voice or choose from premium voices for authentic content delivery
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <Sparkles size={32} />
              </FeatureIcon>
              <FeatureTitle>Smart Enhancement</FeatureTitle>
              <FeatureDescription>
                Automatically enhance your content with natural inflections and professional polish
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </FeatureSection>
    </HomeContainer>
  );
};