'use client';

import { CSSProperties } from 'react';

interface DownloadButtonsProps {
  onPDF: () => void;
  onJPEG: () => void;
  pdfStyle?: CSSProperties;
  jpegStyle?: CSSProperties;
}

const baseStyle: CSSProperties = {
  border: 'none',
  padding: '14px 28px',
  borderRadius: '28px',
  fontSize: '15px',
  fontWeight: 600,
  cursor: 'pointer',
};

export default function DownloadButtons({ onPDF, onJPEG, pdfStyle, jpegStyle }: DownloadButtonsProps) {
  return (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
      <button
        onClick={onPDF}
        style={{
          ...baseStyle,
          background: '#fff',
          color: '#1a1a2e',
          ...pdfStyle,
        }}
      >
        PDF 저장
      </button>
      <button
        onClick={onJPEG}
        style={{
          ...baseStyle,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#fff',
          ...jpegStyle,
        }}
      >
        JPEG 저장
      </button>
    </div>
  );
}
