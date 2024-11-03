import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  CreditCard, 
  User, 
  BarChart, 
  Sun, 
  Moon,
  Bell,
  Shield,
  Wallet,
  Clock,
  HardDrive,
  Edit2,
  ChevronRight,
  Check
} from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Toggle } from '@/components/common/Toggle';
import {
  SettingsContainer,
  Header,
  HeaderTitle,
  SettingsGrid,
  SettingSection,
  SectionTitle,
  SettingItem,
  SettingInfo,
  UsageBar,
  UsageInfo,
  PlanBadge,
  BillingInfo,
  StorageInfo,
  PlansGrid,
  PlanCard,
  PlanHeader,
  PlanPrice,
  PlanFeatures,
  PlanFeature,
  BillingHistory,
  BillingHistoryItem,
  PaymentMethod,
  EditButton
} from './Settings.styles';

const SUBSCRIPTION_PLANS = [
  {
    name: 'Basic',
    price: '9.99',
    features: [
      '50,000 tokens/month',
      '10 GB storage',
      'Basic voice options',
      'Email support'
    ],
    current: false
  },
  {
    name: 'Pro',
    price: '29.99',
    features: [
      '200,000 tokens/month',
      '50 GB storage',
      'All voice options',
      'Priority support',
      'Custom voice cloning',
      'Advanced analytics'
    ],
    current: true
  },
  {
    name: 'Enterprise',
    price: '99.99',
    features: [
      'Unlimited tokens',
      '200 GB storage',
      'Custom voice options',
      '24/7 support',
      'Dedicated account manager',
      'API access'
    ],
    current: false
  }
];

const BILLING_HISTORY = [
  {
    date: 'Nov 1, 2023',
    amount: '$29.99',
    status: 'Paid',
    description: 'Pro Plan - Monthly'
  },
  {
    date: 'Oct 1, 2023',
    amount: '$29.99',
    status: 'Paid',
    description: 'Pro Plan - Monthly'
  },
  {
    date: 'Sep 1, 2023',
    amount: '$29.99',
    status: 'Paid',
    description: 'Pro Plan - Monthly'
  }
];

export const Settings = () => {
  const { mode, toggleTheme } = useThemeStore();
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [soundAlerts, setSoundAlerts] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(true);
  const [showEditPayment, setShowEditPayment] = useState(false);

  const handleUpgrade = (planName: string) => {
    // Implement upgrade logic
    console.log(`Upgrading to ${planName} plan`);
  };

  const handleEditPayment = () => {
    setShowEditPayment(true);
    // Implement payment editing logic
  };

  return (
    <Container>
      <SettingsContainer>
        <Card>
          <Header>
            <HeaderTitle>
              <SettingsIcon size={24} />
              <h2>Settings</h2>
            </HeaderTitle>
          </Header>

          <SettingsGrid>
            {/* Subscription Plans Section */}
            <SettingSection $fullWidth>
              <SectionTitle>
                <Wallet size={20} />
                <h3>Subscription Plans</h3>
              </SectionTitle>
              <PlansGrid>
                {SUBSCRIPTION_PLANS.map((plan) => (
                  <PlanCard key={plan.name} $current={plan.current}>
                    <PlanHeader>
                      <h4>{plan.name}</h4>
                      {plan.current && <PlanBadge>Current Plan</PlanBadge>}
                    </PlanHeader>
                    <PlanPrice>
                      <span>${plan.price}</span>
                      <small>/month</small>
                    </PlanPrice>
                    <PlanFeatures>
                      {plan.features.map((feature, index) => (
                        <PlanFeature key={index}>
                          <Check size={16} />
                          {feature}
                        </PlanFeature>
                      ))}
                    </PlanFeatures>
                    <Button
                      variant={plan.current ? 'outline' : 'primary'}
                      onClick={() => handleUpgrade(plan.name)}
                      disabled={plan.current}
                      fullWidth
                    >
                      {plan.current ? 'Current Plan' : 'Upgrade'}
                    </Button>
                  </PlanCard>
                ))}
              </PlansGrid>
            </SettingSection>

            {/* Usage Section */}
            <SettingSection>
              <SectionTitle>
                <BarChart size={20} />
                <h3>Usage</h3>
              </SectionTitle>
              <UsageInfo>
                <div>
                  <h4>API Tokens</h4>
                  <UsageBar $percentage={65} $color="primary">
                    <div />
                  </UsageBar>
                  <span>65,000 / 100,000 tokens used</span>
                </div>
                <StorageInfo>
                  <HardDrive size={16} />
                  <span>23.5 GB of 50 GB used</span>
                </StorageInfo>
              </UsageInfo>
            </SettingSection>

            {/* Personal Settings */}
            <SettingSection>
              <SectionTitle>
                <User size={20} />
                <h3>Personal Settings</h3>
              </SectionTitle>
              
              <SettingItem>
                <SettingInfo>
                  <h4>Theme</h4>
                  <p>Switch between light and dark mode</p>
                </SettingInfo>
                <Toggle
                  checked={mode === 'dark'}
                  onChange={toggleTheme}
                  icon={mode === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                />
              </SettingItem>

              <SettingItem>
                <SettingInfo>
                  <h4>Email Notifications</h4>
                  <p>Receive updates and alerts via email</p>
                </SettingInfo>
                <Toggle
                  checked={emailNotifications}
                  onChange={setEmailNotifications}
                  icon={<Bell size={16} />}
                />
              </SettingItem>

              <SettingItem>
                <SettingInfo>
                  <h4>Sound Alerts</h4>
                  <p>Play sound when processing completes</p>
                </SettingInfo>
                <Toggle
                  checked={soundAlerts}
                  onChange={setSoundAlerts}
                />
              </SettingItem>

              <SettingItem>
                <SettingInfo>
                  <h4>Auto-Save</h4>
                  <p>Automatically save changes</p>
                </SettingInfo>
                <Toggle
                  checked={autoSave}
                  onChange={setAutoSave}
                  icon={<Clock size={16} />}
                />
              </SettingItem>
            </SettingSection>

            {/* Billing Section */}
            <SettingSection>
              <SectionTitle>
                <CreditCard size={20} />
                <h3>Billing</h3>
              </SectionTitle>
              
              {/* Payment Method */}
              <Card variant="secondary">
                <PaymentMethod>
                  <SettingInfo>
                    <h4>Payment Method</h4>
                    <p>•••• •••• •••• 4242</p>
                    <p>Expires 12/24</p>
                  </SettingInfo>
                  <EditButton onClick={handleEditPayment}>
                    <Edit2 size={16} />
                  </EditButton>
                </PaymentMethod>

                <BillingInfo>
                  <h4>Next Payment</h4>
                  <p>November 30, 2023</p>
                  <p>$29.99 - Pro Plan Monthly</p>
                </BillingInfo>
              </Card>

              {/* Billing History */}
              <BillingHistory>
                <h4>Billing History</h4>
                {BILLING_HISTORY.map((item, index) => (
                  <BillingHistoryItem key={index}>
                    <div>
                      <span>{item.date}</span>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <strong>{item.amount}</strong>
                      <small>{item.status}</small>
                    </div>
                    <ChevronRight size={16} />
                  </BillingHistoryItem>
                ))}
              </BillingHistory>
            </SettingSection>

            {/* Security Section */}
            <SettingSection>
              <SectionTitle>
                <Shield size={20} />
                <h3>Security</h3>
              </SectionTitle>
              <SettingItem>
                <SettingInfo>
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security</p>
                </SettingInfo>
                <Toggle
                  checked={true}
                  onChange={() => {}}
                />
              </SettingItem>
            </SettingSection>
          </SettingsGrid>
        </Card>
      </SettingsContainer>
    </Container>
  );
};