import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import {
  Brain,
  History,
  Mic,
  Zap,
  Clock,
  Plus,
  ChevronRight,
  Crown,
  BarChart
} from 'lucide-react';
import {
  DashboardHeader,
  DashboardGrid,
  StatsGrid,
  StatCard,
  ActivityList,
  ActivityItem,
  ActivityMeta,
  VoiceClonesList,
  VoiceCloneItem,
  SubscriptionCard,
  UsageStats,
  UsageBar,
  QuickActions
} from './Dashboard.styles';

const RECENT_ACTIVITIES = [
  {
    id: '1',
    type: 'generation',
    title: 'Marketing Blog Post',
    date: '2 hours ago',
    status: 'completed'
  },
  {
    id: '2',
    type: 'voice-clone',
    title: 'Professional Voice Clone',
    date: '5 hours ago',
    status: 'processing'
  },
  {
    id: '3',
    type: 'generation',
    title: 'Product Description',
    date: 'Yesterday',
    status: 'completed'
  }
];

const VOICE_CLONES = [
  {
    id: '1',
    name: 'Professional Narrator',
    status: 'ready',
    lastUsed: '1 hour ago'
  },
  {
    id: '2',
    name: 'Casual Podcast Voice',
    status: 'training',
    lastUsed: '2 days ago'
  }
];

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <Container>
      <DashboardHeader>
        <div>
          <h1>Welcome back, {user?.firstName}!</h1>
          <p>Here's what's happening with your content generation</p>
        </div>
        <Button onClick={() => {}} variant="primary">
          <Plus size={18} />
          New Generation
        </Button>
      </DashboardHeader>

      <DashboardGrid>
        {/* Quick Stats */}
        <StatsGrid>
          <StatCard>
            <Brain size={24} />
            <div>
              <h3>65</h3>
              <p>Generations</p>
            </div>
          </StatCard>
          <StatCard>
            <Mic size={24} />
            <div>
              <h3>4</h3>
              <p>Voice Clones</p>
            </div>
          </StatCard>
          <StatCard>
            <Clock size={24} />
            <div>
              <h3>126h</h3>
              <p>Audio Generated</p>
            </div>
          </StatCard>
        </StatsGrid>

        {/* Subscription Status */}
        <SubscriptionCard>
          <div className="header">
            <Crown size={24} />
            <h3>Pro Plan</h3>
          </div>
          <UsageStats>
            <div>
              <span>API Tokens</span>
              <UsageBar $percentage={65} $color="primary">
                <div />
              </UsageBar>
              <small>65,000 / 100,000 tokens used</small>
            </div>
            <div>
              <span>Storage</span>
              <UsageBar $percentage={45} $color="secondary">
                <div />
              </UsageBar>
              <small>22.5 GB / 50 GB used</small>
            </div>
          </UsageStats>
          <Button variant="outline" fullWidth>
            Manage Subscription
          </Button>
        </SubscriptionCard>

        {/* Recent Activity */}
        <Card>
          <div className="card-header">
            <h3>
              <History size={20} />
              Recent Activity
            </h3>
            <Button variant="text">View All</Button>
          </div>
          <ActivityList>
            {RECENT_ACTIVITIES.map((activity) => (
              <ActivityItem key={activity.id} $type={activity.type}>
                <div>
                  {activity.type === 'generation' ? <Brain size={16} /> : <Mic size={16} />}
                  <div>
                    <h4>{activity.title}</h4>
                    <ActivityMeta>
                      <span>{activity.date}</span>
                      <span className={`status ${activity.status}`}>
                        {activity.status}
                      </span>
                    </ActivityMeta>
                  </div>
                </div>
                <ChevronRight size={16} />
              </ActivityItem>
            ))}
          </ActivityList>
        </Card>

        {/* Voice Clones */}
        <Card>
          <div className="card-header">
            <h3>
              <Mic size={20} />
              Voice Clones
            </h3>
            <Button variant="text">Manage</Button>
          </div>
          <VoiceClonesList>
            {VOICE_CLONES.map((clone) => (
              <VoiceCloneItem key={clone.id}>
                <div>
                  <h4>{clone.name}</h4>
                  <span className={`status ${clone.status}`}>{clone.status}</span>
                </div>
                <small>Last used: {clone.lastUsed}</small>
              </VoiceCloneItem>
            ))}
          </VoiceClonesList>
        </Card>

        {/* Quick Actions */}
        <QuickActions>
          <Button variant="outline" fullWidth>
            <Zap size={18} />
            Quick Generation
          </Button>
          <Button variant="outline" fullWidth>
            <Mic size={18} />
            New Voice Clone
          </Button>
          <Button variant="outline" fullWidth>
            <BarChart size={18} />
            View Analytics
          </Button>
        </QuickActions>
      </DashboardGrid>
    </Container>
  );
};