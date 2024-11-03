import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Form } from '@/components/common/Form';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { Avatar } from '@/components/common/Avatar';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const ProfileForm = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await user?.update({
        firstName,
        lastName,
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      await user?.setProfileImage({ file });
    } catch (error) {
      console.error('Failed to upload avatar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AvatarContainer>
        <Avatar 
          src={user?.imageUrl} 
          alt={user?.fullName || 'Profile'} 
          size="large" 
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          style={{ display: 'none' }}
          id="avatar-upload"
        />
        <Button
          as="label"
          htmlFor="avatar-upload"
          variant="outline"
          size="small"
        >
          Change Avatar
        </Button>
      </AvatarContainer>

      {isEditing ? (
        <>
          <Input
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <Input
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
          <ButtonGroup>
            <Button 
              type="submit" 
              isLoading={isLoading}
              fullWidth
            >
              Save Changes
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsEditing(false)}
              disabled={isLoading}
              fullWidth
            >
              Cancel
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <Input
            label="First Name"
            value={user?.firstName || ''}
            disabled
            fullWidth
          />
          <Input
            label="Last Name"
            value={user?.lastName || ''}
            disabled
            fullWidth
          />
          <Input
            label="Email"
            value={user?.primaryEmailAddress?.emailAddress || ''}
            disabled
            fullWidth
          />
          <Button
            type="button"
            onClick={() => setIsEditing(true)}
            fullWidth
          >
            Edit Profile
          </Button>
        </>
      )}
    </Form>
  );
};