import React, { useState } from 'react';
import { Building2, Users, Briefcase, Mail, Lock, Shield } from 'lucide-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import {
  AboutContainer,
  TabsContainer,
  Tab,
  ContentSection,
  TeamGrid,
  TeamMember,
  ValuesGrid,
  ValueCard,
  JobList,
  JobItem,
  JobMeta,
  ContactForm,
  ContactInfo,
  ContactDetails
} from './About.styles';

const TABS = [
  { id: 'company', label: 'Company', icon: Building2 },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'careers', label: 'Careers', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'legal', label: 'Legal', icon: Lock },
  { id: 'admin', label: 'Admin', icon: Shield }
];

const VALUES = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Pushing the boundaries of AI voice technology'
  },
  {
    icon: '⭐',
    title: 'Quality',
    description: 'Delivering exceptional audio experiences'
  },
  {
    icon: '🔒',
    title: 'Security',
    description: 'Protecting user data and privacy'
  }
];

const TEAM_MEMBERS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/team/sarah.jpg',
    bio: 'Leading innovation in AI voice technology'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/team/michael.jpg',
    bio: 'AI & Machine Learning expert'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    image: '/team/emily.jpg',
    bio: 'Product strategy and vision'
  },
  {
    name: 'David Wilson',
    role: 'Head of Engineering',
    image: '/team/david.jpg',
    bio: 'Infrastructure and scalability specialist'
  }
];

const JOBS = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time'
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time'
  }
];

export const About = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission
    console.log('Form submitted:', formData);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'company':
        return (
          <ContentSection>
            <h2>About AudioMax</h2>
            <p>
             AudioMax is a cutting-edge platform revolutionizing audio content creation through advanced AI technology. Our mission is to make professional-quality voice generation accessible to everyone. Whether you're a content creator, educator, or storyteller, AudioMax provides the tools you need to transform text into captivating audio experiences. We prioritize innovation, quality, and security, pushing the boundaries of AI voice technology while ensuring an exceptional user experience and safeguarding user data and privacy.
            </p>

            <h3>Our Values</h3>
            <ValuesGrid>
              {VALUES.map((value) => (
                <ValueCard key={value.title}>
                  <span className="icon">{value.icon}</span>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ContentSection>
        );

      case 'team':
        return (
          <ContentSection>
            <h2>Our Team</h2>
            <TeamGrid>
              {TEAM_MEMBERS.map((member) => (
                <TeamMember key={member.name}>
                  <div className="avatar">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <div className="placeholder">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="content">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                    <p>{member.bio}</p>
                  </div>
                </TeamMember>
              ))}
            </TeamGrid>
          </ContentSection>
        );

      case 'careers':
        return (
          <ContentSection>
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented individuals to join our mission of revolutionizing audio content creation.
            </p>
            <JobList>
              {JOBS.map((job) => (
                <JobItem key={job.title}>
                  <div>
                    <h4>{job.title}</h4>
                    <JobMeta>
                      {job.department} • {job.location} • {job.type}
                    </JobMeta>
                  </div>
                  <Button>Apply Now</Button>
                </JobItem>
              ))}
            </JobList>
          </ContentSection>
        );

      case 'contact':
        return (
          <ContentSection>
            <h2>Get in Touch</h2>
            <p>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <ContactForm onSubmit={handleFormSubmit}>
              <div>
                <ContactInfo>
                  <ContactDetails>
                    <Building2 size={20} />
                    <span>123 Tech Street, San Francisco, CA 94105</span>
                  </ContactDetails>
                  <ContactDetails>
                    <Mail size={20} />
                    <span>contact@audiomax.com</span>
                  </ContactDetails>
                  <ContactDetails>
                    <Users size={20} />
                    <span>+1 (555) 123-4567</span>
                  </ContactDetails>
                </ContactInfo>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label>Message</label>
                  <textarea
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <Button type="submit" fullWidth>
                    Send Message
                  </Button>
                </div>
              </div>
            </ContactForm>
          </ContentSection>
        );
        case 'legal':
        return (
          <ContentSection>
            <h2>Legal Information</h2>
            <p>Important legal information and policies regarding AudioMax services.</p>
            
            <h3>Terms of Service</h3>
            <p>By using AudioMax, you agree to our terms of service which govern your use of our platform and services.</p>
            
            <h3>Privacy Policy</h3>
            <p>We take your privacy seriously. Learn how we collect, use, and protect your personal information.</p>
            
            <h3>Cookie Policy</h3>
            <p>Information about how we use cookies and similar technologies on our platform.</p>
            
            <h3>Security</h3>
            <p>Details about our security measures and how we protect your data.</p>
            
            <div style={{ marginTop: '2rem' }}>
              <Button variant="outline" onClick={() => window.open('/terms', '_blank')}>
                View Terms of Service
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('/privacy', '_blank')}
                style={{ marginLeft: '1rem' }}
              >
                View Privacy Policy
              </Button>
            </div>
          </ContentSection>
        );

      case 'admin':
        return (
          <ContentSection>
            <h2>Admin Dashboard</h2>
            <p>Access restricted to authorized administrators only.</p>
            
            <Card variant="secondary" style={{ marginTop: '2rem' }}>
              <h3>Quick Actions</h3>
              <JobList>
                <JobItem>
                  <div>
                    <h4>User Management</h4>
                    <JobMeta>Manage user accounts and permissions</JobMeta>
                  </div>
                  <Button>Access</Button>
                </JobItem>
                
                <JobItem>
                  <div>
                    <h4>Content Management</h4>
                    <JobMeta>Manage notifications and updates</JobMeta>
                  </div>
                  <Button>Access</Button>
                </JobItem>
                
                <JobItem>
                  <div>
                    <h4>Analytics Dashboard</h4>
                    <JobMeta>View platform statistics and metrics</JobMeta>
                  </div>
                  <Button>Access</Button>
                </JobItem>
                
                <JobItem>
                  <div>
                    <h4>System Settings</h4>
                    <JobMeta>Configure platform settings</JobMeta>
                  </div>
                  <Button>Access</Button>
                </JobItem>
              </JobList>
            </Card>
          </ContentSection>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <AboutContainer>
        <Card>
          <h1>About Us</h1>
          <TabsContainer>
            {TABS.map((tab) => (
              <Tab
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                $active={activeTab === tab.id}
              >
                {tab.icon && <tab.icon size={16} />}
                {tab.label}
              </Tab>
            ))}
          </TabsContainer>
          {renderTabContent()}
        </Card>
      </AboutContainer>
    </Container>
  );
};