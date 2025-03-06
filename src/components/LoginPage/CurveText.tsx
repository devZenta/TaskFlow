'use client';

import React from 'react';
import styled from 'styled-components';

interface CurveTextProps {
  text?: string;
  className?: string;
}

const CurveTextContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
  width: 100%;
`;

export function CurveText({ text = "TaskFlow AI • Boost your productivity • Organize • Collaborate", className = "" }: CurveTextProps) {
  return (
    <CurveTextContainer className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        <defs>
          <path
            id="curve-path"
            d="M 50 0 L 50 1000"
            fill="none"
          />
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <text
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.3rem',
            textTransform: 'uppercase',
            fill: 'url(#textGradient)',
            opacity: 0.3
          }}
        >
          <textPath href="#curve-path" startOffset="0%">
            {text} • {text} • {text} •
          </textPath>
        </text>
      </svg>
    </CurveTextContainer>
  );
}