import React, { useState } from 'react';
import { Mic, Upload, Play, Pause, Trash2, Edit2, Star, Plus, AlertCircle } from 'lucide-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import {
  StudioContainer,
  Header,
  HeaderTitle,
  HeaderActions,
  RecordingSection,
  VoiceList,
  VoiceItem,
  VoiceInfo,
  VoiceActions,
  EmptyState,
  IconButton,
  RecordButton,
  StatusIndicator
} from './VoiceCloning.styles';

interface VoiceClone {
  id: string;
  name: string;
  date: string;
  isFavorite: boolean;
  status: 'ready' | 'processing' | 'failed';
  duration: string;
}

export const VoiceCloning = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
  const [voices, setVoices] = useState<VoiceClone[]>([
    {
      id: '1',
      name: 'My Voice 1',
      date: '2023-11-03',
      isFavorite: true,
      status: 'ready',
      duration: '0:45'
    },
    {
      id: '2',
      name: 'Presentation Voice',
      date: '2023-11-02',
      isFavorite: false,
      status: 'processing',
      duration: '1:30'
    }
  ]);

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  const handleUpload = () => {
    // Implement file upload logic
  };

  const handlePlay = (id: string) => {
    setSelectedVoice(selectedVoice === id ? null : id);
  };

  const handleDelete = (id: string) => {
    setVoices(voices.filter(voice => voice.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setVoices(voices.map(voice => 
      voice.id === id ? { ...voice, isFavorite: !voice.isFavorite } : voice
    ));
  };

  return (
    <Container>
      <StudioContainer>
        <Card>
          <Header>
            <HeaderTitle>
              <Mic size={24} />
              <h2>Voice Cloning Studio</h2>
            </HeaderTitle>
            <HeaderActions>
              <Button variant="outline" onClick={handleUpload}>
                <Upload size={18} />
                Upload Sample
              </Button>
              <Button variant="primary">
                <Plus size={18} />
                New Clone
              </Button>
            </HeaderActions>
          </Header>

          <RecordingSection>
            <RecordButton 
              onClick={handleRecord}
              $isRecording={isRecording}
              title={isRecording ? 'Stop Recording' : 'Start Recording'}
            >
              <Mic size={24} />
            </RecordButton>
            {isRecording && <StatusIndicator>Recording...</StatusIndicator>}
          </RecordingSection>

          {voices.length > 0 ? (
            <VoiceList>
              {voices.map(voice => (
                <VoiceItem key={voice.id}>
                  <VoiceInfo>
                    <h3>{voice.name}</h3>
                    <span>{voice.date} • {voice.duration}</span>
                    {voice.status === 'processing' && (
                      <StatusIndicator>Processing...</StatusIndicator>
                    )}
                  </VoiceInfo>
                  <VoiceActions>
                    <IconButton 
                      onClick={() => handlePlay(voice.id)}
                      title={selectedVoice === voice.id ? 'Pause' : 'Play'}
                    >
                      {selectedVoice === voice.id ? <Pause size={18} /> : <Play size={18} />}
                    </IconButton>
                    <IconButton 
                      onClick={() => toggleFavorite(voice.id)}
                      title={voice.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      $active={voice.isFavorite}
                    >
                      <Star size={18} />
                    </IconButton>
                    <IconButton title="Edit name">
                      <Edit2 size={18} />
                    </IconButton>
                    <IconButton 
                      onClick={() => handleDelete(voice.id)}
                      title="Delete"
                      $danger
                    >
                      <Trash2 size={18} />
                    </IconButton>
                  </VoiceActions>
                </VoiceItem>
              ))}
            </VoiceList>
          ) : (
            <EmptyState>
              <AlertCircle size={48} />
              <h3>No Voice Clones Yet</h3>
              <p>Start by recording a voice sample or uploading an audio file.</p>
            </EmptyState>
          )}
        </Card>
      </StudioContainer>
    </Container>
  );
};