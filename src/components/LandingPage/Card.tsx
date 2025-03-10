import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Définir les props du composant Card
interface CardProps {
  partners?: Array<{ name: string; logo: string }>;
}

const Card: React.FC<CardProps> = ({ partners = [] }) => {
  return (
    <StyledWrapper>
      <div className="card-3d">
        {partners.slice(0, 10).map((partner, index) => (
          <div key={partner.name} className="partner-card">
            <Image 
              src={partner.logo} 
              alt={`${partner.name} logo`}
              width={60} 
              height={60}
              className="partner-logo"
              quality={100}
            />
            <span className="partner-name">{partner.name}</span>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes autoRun3d {
    from {
      transform: perspective(800px) rotateY(-360deg);
    }
    to {
      transform: perspective(800px) rotateY(0deg);
    }
  }

  @keyframes animateBrightness {
    10% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(0.1);
    }
    90% {
      filter: brightness(1);
    }
  }

  .card-3d {
    position: relative;
    width: 400px;
    height: 200px;
    transform-style: preserve-3d;
    transform: perspective(800px);
    animation: autoRun3d 20s linear infinite;
    will-change: transform;
  }

  .card-3d div {
    position: absolute;
    width: 80px;
    height: 112px;
    background-color: rgba(20, 20, 30, 0.8);
    border: solid 2px rgba(138, 43, 226, 0.4);
    border-radius: 0.5rem;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    animation: animateBrightness 20s linear infinite;
    transition-duration: 200ms;
    will-change: transform, filter;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  .partner-logo {
    max-width: 100%;
    max-height: 60%;
    object-fit: contain;
  }

  .partner-name {
    margin-top: 8px;
    font-size: 10px;
    color: white;
    text-align: center;
    opacity: 0.8;
  }

  .card-3d:hover {
    animation-play-state: paused !important;
  }

  .card-3d:hover div {
    animation-play-state: paused !important;
  }

  .card-3d div:nth-child(1) {
    transform: translate(-50%, -50%) rotateY(0deg) translateZ(150px);
    animation-delay: -0s;
  }

  .card-3d div:nth-child(2) {
    transform: translate(-50%, -50%) rotateY(36deg) translateZ(150px);
    animation-delay: -2s;
  }

  .card-3d div:nth-child(3) {
    transform: translate(-50%, -50%) rotateY(72deg) translateZ(150px);
    animation-delay: -4s;
  }

  .card-3d div:nth-child(4) {
    transform: translate(-50%, -50%) rotateY(108deg) translateZ(150px);
    animation-delay: -6s;
  }

  .card-3d div:nth-child(5) {
    transform: translate(-50%, -50%) rotateY(144deg) translateZ(150px);
    animation-delay: -8s;
  }

  .card-3d div:nth-child(6) {
    transform: translate(-50%, -50%) rotateY(180deg) translateZ(150px);
    animation-delay: -10s;
  }

  .card-3d div:nth-child(7) {
    transform: translate(-50%, -50%) rotateY(216deg) translateZ(150px);
    animation-delay: -12s;
  }

  .card-3d div:nth-child(8) {
    transform: translate(-50%, -50%) rotateY(252deg) translateZ(150px);
    animation-delay: -14s;
  }

  .card-3d div:nth-child(9) {
    transform: translate(-50%, -50%) rotateY(288deg) translateZ(150px);
    animation-delay: -16s;
  }

  .card-3d div:nth-child(10) {
    transform: translate(-50%, -50%) rotateY(324deg) translateZ(150px);
    animation-delay: -18s;
  }
`;

export default Card;