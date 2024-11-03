import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import { useThemeStore } from '@/store/themeStore';
import { 
  Mic, 
  FolderOpen, 
  Settings, 
  Bell, 
  HelpCircle, 
  Info,
  Sun,
  Moon,
  LogOut,
  Home,
  Plus
} from 'lucide-react';
import {
  SidebarContainer,
  MenuButton,
  SidebarContent,
  MenuItem,
  MenuIcon,
  MenuText,
  LogoutButton
} from './Sidebar.styles';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { mode, toggleTheme } = useThemeStore();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const menuItems = [
    {
      icon: <Home size={20} />,
      text: 'Home',
      onClick: () => handleNavigation('/dashboard')
    },
    {
      icon: <Plus size={20} />,
      text: 'Generate Audio',
      onClick: () => handleNavigation('/generate')
    },
    {
      icon: <Mic size={20} />,
      text: 'Voice Cloning',
      onClick: () => handleNavigation('/voice-cloning')
    },
    {
      icon: <FolderOpen size={20} />,
      text: 'Files',
      onClick: () => handleNavigation('/files')
    },
    {
      icon: <Settings size={20} />,
      text: 'Settings',
      onClick: () => handleNavigation('/settings')
    },
    {
      icon: <Bell size={20} />,
      text: 'Notifications',
      onClick: () => handleNavigation('/notifications')
    },
    {
      icon: <HelpCircle size={20} />,
      text: 'Help',
      onClick: () => handleNavigation('/help')
    },
    {
      icon: <Info size={20} />,
      text: 'About',
      onClick: () => handleNavigation('/about')
    },
    {
      icon: mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />,
      text: 'Theme',
      onClick: toggleTheme
    }
  ];

  return (
    <>
      <MenuButton 
        onClick={() => setIsOpen(!isOpen)} 
        $isOpen={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        ☰
      </MenuButton>
      <SidebarContainer $isOpen={isOpen}>
        <SidebarContent>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={item.onClick}>
              <MenuIcon>{item.icon}</MenuIcon>
              <MenuText>{item.text}</MenuText>
            </MenuItem>
          ))}
          <LogoutButton onClick={handleLogout}>
            <MenuIcon><LogOut size={20} /></MenuIcon>
            <MenuText>Logout</MenuText>
          </LogoutButton>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};