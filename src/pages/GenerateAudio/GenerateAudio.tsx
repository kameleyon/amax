import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Wand2,
  RefreshCcw,
  Share2,
  Download,
  AlertCircle,
  Loader
} from 'lucide-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { CustomDropdown } from '@/components/common/CustomDropdown/CustomDropdown';
import { Button } from '@/components/common/Button';
import { AudioPlayer } from '@/components/AudioPlayer';
import { useGenerateAudio } from './hooks/useGenerateAudio';
import {
  GenerateContainer,
  Header,
  HeaderTitle,
  InstructionsSection,
  InstructionStep,
  ContentGrid,
  LeftSection,
  RightSection,
  UploadArea,
  UploadIcon,
  UploadText,
  GenerationControls,
  TranscriptSection,
  TranscriptActions,
  LoadingOverlay,
  ErrorMessage,
  VoiceLoadingMessage
} from './GenerateAudio.styles';

const CATEGORIES = [
  { value: 'tedTalk', label: 'TED Talk' },
  { value: 'story', label: 'Story' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'article', label: 'Article' }
];

const TONES = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'energetic', label: 'Energetic' }
];

export const GenerateAudio = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tone, setTone] = useState('');
  const [voice, setVoice] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const { 
    generateAudio, 
    regenerateAudio,
    publishAudio,
    isLoading, 
    isVoicesLoading,
    error,
    audioUrl,
    voices,
    retryLoadVoices
  } = useGenerateAudio();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'text/plain' || file.type === 'application/pdf')) {
      const text = await file.text();
      setContent(text);
    }
  };

  const handleGenerate = async () => {
    const result = await generateAudio({
      content,
      category,
      tone,
      voice
    });

    if (result?.transcript) {
      setTranscript(result.transcript);
    }
  };

  const handleRegenerate = async () => {
    const result = await regenerateAudio({
      content: transcript,
      category,
      tone,
      voice
    });

    if (result?.transcript) {
      setTranscript(result.transcript);
    }
  };

  const handlePublish = async () => {
    if (!audioUrl) return;
    
    if (window.confirm('Are you sure you want to publish? No further edits will be allowed.')) {
      await publishAudio({
        content: transcript,
        audioUrl
      });
    }
  };

  return (
    <Container>
      <GenerateContainer>
        <Header>
          <HeaderTitle>
            <Wand2 size={24} />
            <h2>Generate Audio</h2>
          </HeaderTitle>
        </Header>

        <InstructionsSection>
          <InstructionStep>
            <FileText size={20} />
            <span>Upload or write your content</span>
          </InstructionStep>
          <InstructionStep>
            <Wand2 size={20} />
            <span>Choose style and voice</span>
          </InstructionStep>
          <InstructionStep>
            <RefreshCcw size={20} />
            <span>Generate and refine</span>
          </InstructionStep>
          <InstructionStep>
            <Share2 size={20} />
            <span>Publish and share</span>
          </InstructionStep>
        </InstructionsSection>

        <ContentGrid>
          <LeftSection>
            <Card title="Content">
              <UploadArea
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                $isDragging={isDragging}
              >
                <UploadIcon>
                  <Upload size={32} />
                </UploadIcon>
                <UploadText>
                  Drag & drop a text file or PDF
                </UploadText>
                <small>or</small>
                <Input
                  as="textarea"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write or paste your content here..."
                  rows={6}
                  fullWidth
                />
              </UploadArea>
            </Card>

            <Card title="Generation Controls">
              <GenerationControls>
                <CustomDropdown
                  label="Category"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Select content category"
                />
                <CustomDropdown
                  label="Tone"
                  options={TONES}
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  placeholder="Select tone"
                />
                {isVoicesLoading ? (
                  <VoiceLoadingMessage>
                    <Loader size={16} /> Loading voices...
                  </VoiceLoadingMessage>
                ) : (
                  <CustomDropdown
                    label="Voice"
                    options={voices}
                    value={voice}
                    onChange={(e) => setVoice(e.target.value)}
                    placeholder="Select voice"
                  />
                )}
                <Button
                  onClick={handleGenerate}
                  disabled={!content || !category || !tone || !voice || isLoading}
                  fullWidth
                >
                  {isLoading ? 'Generating...' : 'Generate Audio'}
                </Button>
              </GenerationControls>
              {error && (
                <ErrorMessage>
                  <AlertCircle size={16} />
                  {error}
                </ErrorMessage>
              )}
            </Card>
          </LeftSection>

          <RightSection>
            {isLoading ? (
              <LoadingOverlay>
                <Loader size={32} />
                <span>Generating your audio content...</span>
              </LoadingOverlay>
            ) : audioUrl ? (
              <>
                <Card title="Preview">
                  <AudioPlayer url={audioUrl} />
                </Card>
                <Card title="Transcript">
                  <TranscriptSection>
                    <Input
                      as="textarea"
                      value={transcript}
                      onChange={(e) => setTranscript(e.target.value)}
                      rows={8}
                      fullWidth
                    />
                    <TranscriptActions>
                      <Button
                        variant="outline"
                        onClick={handleRegenerate}
                        disabled={isLoading}
                      >
                        <RefreshCcw size={16} />
                        Regenerate
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {/* Implement download */}}
                      >
                        <Download size={16} />
                        Download
                      </Button>
                      <Button onClick={handlePublish}>
                        <Share2 size={16} />
                        Publish
                      </Button>
                    </TranscriptActions>
                  </TranscriptSection>
                </Card>
              </>
            ) : (
              <Card>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <AlertCircle size={48} />
                  <h3>No Audio Generated Yet</h3>
                  <p>Fill in the details and generate your first audio content.</p>
                </div>
              </Card>
            )}
          </RightSection>
        </ContentGrid>
      </GenerateContainer>
    </Container>
  );
};