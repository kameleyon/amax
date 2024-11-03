import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Mail,
  Phone,
  ExternalLink,
  Book,
  FileText,
  ArrowRight
} from 'lucide-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import {
  HelpContainer,
  Header,
  HeaderTitle,
  SearchSection,
  ContentGrid,
  FAQSection,
  FAQList,
  FAQItem,
  GuideSection,
  GuideGrid,
  GuideCard,
  ContactSection,
  ContactGrid,
  ContactCard,
  ContactInfo,
  CategoryTabs,
  CategoryTab
} from './Help.styles';

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'voice-cloning', label: 'Voice Cloning' },
  { id: 'billing', label: 'Billing & Payments' },
  { id: 'troubleshooting', label: 'Troubleshooting' }
];

const FAQS = [
  {
    id: '1',
    question: 'How do I generate my first audio?',
    answer: 'To generate your first audio, navigate to the Generate page, enter your text content, select your preferred voice and tone, then click "Generate Audio". The process typically takes a few seconds depending on the length of your content.',
    category: 'getting-started'
  },
  {
    id: '2',
    question: 'What voice options are available?',
    answer: 'We offer a wide variety of voices across different languages, accents, and styles. You can choose from our standard voices or create your own through voice cloning. Premium voices are available on higher tier plans.',
    category: 'voice-cloning'
  },
  {
    id: '3',
    question: 'How does voice cloning work?',
    answer: 'Voice cloning requires a clear audio sample of at least 30 seconds. Upload your sample in the Voice Cloning Studio, and our AI will create a digital version of the voice. The process takes about 5-10 minutes.',
    category: 'voice-cloning'
  },
  {
    id: '4',
    question: 'What are tokens and how do they work?',
    answer: 'Tokens are our unit of measurement for API usage. Each character in your text consumes one token. Your subscription plan determines your monthly token allowance. You can monitor your usage in the dashboard.',
    category: 'billing'
  }
];

const GUIDES = [
  {
    id: '1',
    title: 'Getting Started Guide',
    description: 'Learn the basics of AudioMax and create your first audio content',
    icon: <Book size={24} />,
    link: '/guides/getting-started'
  },
  {
    id: '2',
    title: 'Voice Cloning Tutorial',
    description: 'Step-by-step guide to clone and customize voices',
    icon: <FileText size={24} />,
    link: '/guides/voice-cloning'
  },
  {
    id: '3',
    title: 'API Documentation',
    description: 'Technical documentation for API integration',
    icon: <FileText size={24} />,
    link: '/docs/api'
  }
];

export const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const filteredFAQs = FAQS.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <HelpContainer>
        <Card>
          <Header>
            <HeaderTitle>
              <HelpCircle size={24} />
              <h2>Help & Support</h2>
            </HeaderTitle>
          </Header>

          <SearchSection>
            <Input
              placeholder="Search help articles..."
              value={searchTerm}
              onChange={handleSearch}
              icon={<Search size={18} />}
              fullWidth
            />
          </SearchSection>

          <CategoryTabs>
            {CATEGORIES.map(category => (
              <CategoryTab
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                $active={selectedCategory === category.id}
              >
                {category.label}
              </CategoryTab>
            ))}
          </CategoryTabs>

          <ContentGrid>
            <FAQSection>
              <h3>Frequently Asked Questions</h3>
              <FAQList>
                {filteredFAQs.map(faq => (
                  <FAQItem 
                    key={faq.id}
                    onClick={() => toggleFAQ(faq.id)}
                    $expanded={expandedFAQ === faq.id}
                  >
                    <div className="question">
                      <span>{faq.question}</span>
                      {expandedFAQ === faq.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </div>
                    {expandedFAQ === faq.id && (
                      <div className="answer">{faq.answer}</div>
                    )}
                  </FAQItem>
                ))}
              </FAQList>
            </FAQSection>

            <GuideSection>
              <h3>Guides & Tutorials</h3>
              <GuideGrid>
                {GUIDES.map(guide => (
                  <GuideCard key={guide.id} href={guide.link}>
                    <div className="icon">{guide.icon}</div>
                    <div className="content">
                      <h4>{guide.title}</h4>
                      <p>{guide.description}</p>
                    </div>
                    <ArrowRight size={16} />
                  </GuideCard>
                ))}
              </GuideGrid>
            </GuideSection>

            <ContactSection>
              <h3>Need More Help?</h3>
              <ContactGrid>
                <ContactCard>
                  <div className="icon">
                    <MessageCircle size={24} />
                  </div>
                  <ContactInfo>
                    <h4>Live Chat Support</h4>
                    <p>Available 24/7 for quick assistance</p>
                    <Button variant="primary">Start Chat</Button>
                  </ContactInfo>
                </ContactCard>

                <ContactCard>
                  <div className="icon">
                    <Mail size={24} />
                  </div>
                  <ContactInfo>
                    <h4>Email Support</h4>
                    <p>support@audiomax.com</p>
                    <Button 
                      variant="outline" 
                      as="a" 
                      href="mailto:support@audiomax.com"
                    >
                      Send Email
                    </Button>
                  </ContactInfo>
                </ContactCard>

                <ContactCard>
                  <div className="icon">
                    <Phone size={24} />
                  </div>
                  <ContactInfo>
                    <h4>Phone Support</h4>
                    <p>Available Mon-Fri, 9AM-5PM EST</p>
                    <Button variant="outline">Call Us</Button>
                  </ContactInfo>
                </ContactCard>
              </ContactGrid>
            </ContactSection>
          </ContentGrid>
        </Card>
      </HelpContainer>
    </Container>
  );
};