import React, { useState } from 'react';
import { Bell, Settings, Calendar, GitCommit } from 'lucide-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import {
  NotificationsContainer,
  Header,
  HeaderTitle,
  HeaderActions,
  CategoryTabs,
  CategoryTab,
  UpdatesList,
  UpdateItem,
  UpdateMeta,
  UpdateContent,
  CategoryBadge,
  SettingsButton,
  NotificationSettings,
  SettingsGrid,
  SettingItem,
  EmptyState
} from './Notifications.styles';

type Category = 'all' | 'announcements' | 'office-hours' | 'changelog';

interface Update {
  id: string;
  title: string;
  content: string;
  category: Exclude<Category, 'all'>;
  date: string;
  time: string;
}

const UPDATES: Update[] = [
  {
    id: '1',
    title: 'New Voice Generation Features',
    content: 'We\'re excited to announce new voice generation capabilities including improved natural inflections and custom voice cloning options. Try them out in the studio!',
    category: 'announcements',
    date: 'November 3, 2024',
    time: '2:30 PM'
  },
  {
    id: '2',
    title: 'Holiday Office Hours',
    content: 'Our support team will have modified hours during the upcoming holiday season. Please check the schedule for availability.',
    category: 'office-hours',
    date: 'November 2, 2024',
    time: '11:00 AM'
  },
  {
    id: '3',
    title: 'Version 2.4.0 Release',
    content: `What's new in 2.4.0:
    • Improved audio processing algorithms
    • New voice customization options
    • Better error handling and feedback
    • Performance optimizations
    • Bug fixes and stability improvements`,
    category: 'changelog',
    date: 'November 1, 2024',
    time: '9:15 AM'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Bell },
  { id: 'announcements', label: 'Announcements', icon: Bell },
  { id: 'office-hours', label: 'Office Hours', icon: Calendar },
  { id: 'changelog', label: 'Changelog', icon: GitCommit }
];

export const Notifications = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState({
    announcements: true,
    'office-hours': true,
    changelog: true
  });

  const filteredUpdates = UPDATES.filter(update => 
    selectedCategory === 'all' || update.category === selectedCategory
  );

  const toggleNotification = (category: string) => {
    setNotifications(prev => ({
      ...prev,
      [category]: !prev[category as keyof typeof prev]
    }));
  };

  const getCategoryIcon = (category: string) => {
    const categoryConfig = CATEGORIES.find(c => c.id === category);
    const Icon = categoryConfig?.icon || Bell;
    return <Icon size={16} />;
  };

  return (
    <Container>
      <NotificationsContainer>
        <Card>
          <Header>
            <HeaderTitle>
              <Bell size={24} />
              <h2>Latest Updates</h2>
            </HeaderTitle>
            <HeaderActions>
              <SettingsButton 
                onClick={() => setShowSettings(!showSettings)}
                $active={showSettings}
              >
                <Settings size={20} />
              </SettingsButton>
            </HeaderActions>
          </Header>

          {showSettings ? (
            <NotificationSettings>
              <h3>Notification Preferences</h3>
              <SettingsGrid>
                {CATEGORIES.slice(1).map(category => (
                  <SettingItem key={category.id}>
                    <div>
                      {getCategoryIcon(category.id)}
                      <span>{category.label}</span>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={notifications[category.id as keyof typeof notifications]}
                        onChange={() => toggleNotification(category.id)}
                      />
                      <span className="slider" />
                    </label>
                  </SettingItem>
                ))}
              </SettingsGrid>
            </NotificationSettings>
          ) : (
            <>
              <CategoryTabs>
                {CATEGORIES.map(category => (
                  <CategoryTab
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as Category)}
                    $active={selectedCategory === category.id}
                  >
                    {category.icon && <category.icon size={16} />}
                    {category.label}
                  </CategoryTab>
                ))}
              </CategoryTabs>

              {filteredUpdates.length > 0 ? (
                <UpdatesList>
                  {filteredUpdates.map(update => (
                    <UpdateItem key={update.id}>
                      <UpdateMeta>
                        <div>
                          <span>{update.date}</span>
                          <span>{update.time}</span>
                        </div>
                        <CategoryBadge $category={update.category}>
                          {getCategoryIcon(update.category)}
                          {update.category}
                        </CategoryBadge>
                      </UpdateMeta>
                      <UpdateContent>
                        <h3>{update.title}</h3>
                        <p>{update.content}</p>
                      </UpdateContent>
                    </UpdateItem>
                  ))}
                </UpdatesList>
              ) : (
                <EmptyState>
                  <Bell size={48} />
                  <h3>No updates yet</h3>
                  <p>Check back later for new updates</p>
                </EmptyState>
              )}
            </>
          )}
        </Card>
      </NotificationsContainer>
    </Container>
  );
};