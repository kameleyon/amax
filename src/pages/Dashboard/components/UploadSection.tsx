import React, { useState } from 'react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { UploadArea, UploadIcon, UploadText } from './styles';

export const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    // Implement file upload logic
    console.log('Files to upload:', files);
  };

  return (
    <Card title="Upload Audio">
      <UploadArea
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        $isDragging={isDragging}
      >
        <UploadIcon>📁</UploadIcon>
        <UploadText>Drag & drop audio files or</UploadText>
        <Button variant="outline" size="small">Browse Files</Button>
      </UploadArea>
    </Card>
  );
};