import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';

interface WaveformProps {
  url: string;
  onReady?: () => void;
  onPositionChange?: (position: number) => void;
}

const WaveformContainer = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const Waveform: React.FC<WaveformProps> = ({ url, onReady, onPositionChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#4a90e2',
      progressColor: '#2171cd',
      cursorColor: '#fff',
      barWidth: 2,
      barRadius: 3,
      responsive: true,
      height: 60,
      normalize: true,
      partialRender: true,
    });

    wavesurfer.current.load(url);

    wavesurfer.current.on('ready', () => {
      onReady?.();
    });

    wavesurfer.current.on('audioprocess', () => {
      const position = wavesurfer.current?.getCurrentTime() ?? 0;
      onPositionChange?.(position);
    });

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [url, onReady, onPositionChange]);

  return <WaveformContainer ref={containerRef} />;
};