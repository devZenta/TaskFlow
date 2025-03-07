'use client';

import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import styled from 'styled-components';
import BackButton from '@/components/LoginPage/BackButton';

interface LoginProps {
  onBack: () => void;
}

const StyledButtons = styled.div`
  .auth-button {
    position: relative;
    overflow: hidden;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.320, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }

  .auth-button:hover::before {
    transform: scaleY(1);
  }

  .auth-button-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }

  .auth-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .google-button::before {
    background: linear-gradient(
      82.3deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
  }

  .github-button::before {
    background: linear-gradient(
      82.3deg,
      rgba(236, 72, 153, 1) 10.8%,
      rgba(168, 85, 247, 1) 94.3%
    );
  }

  .auth-button:active {
    scale: 0.95;
  }
`;

export function Login({ onBack }: LoginProps) {

  const [formData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  // Modification pour utiliser le BackButton avec l'événement onClick
  const handleBackButtonClick = () => {
    onBack();
  };

  return (
    <div className="w-full max-w-md space-y-8 p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-[0_0_25px_rgba(168,85,247,0.15)] backdrop-blur-sm">
      {/* Remplacement du bouton Back to home par BackButton */}
      <div onClick={handleBackButtonClick} className="cursor-pointer">
        <BackButton />
      </div>
  
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          TaskFlow Platform
        </h2>
        <p className="text-lg text-gray-400">
          Only login via Google or Github is supported.
        </p>
      </div>
  
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Social Logins */}
        <StyledButtons>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => signIn('google', { redirectTo: '/dashboard' })}
              type="button"
              className="auth-button google-button"
            >
              <div className="auth-button-content">
                <Image
                  src="/Icons/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                Google
              </div>
            </button>
            <button
              onClick={() => signIn('github', { redirectTo: '/dashboard' })}
              type="button"
              className="auth-button github-button"
            >
              <div className="auth-button-content">
                <Github className="h-5 w-5" />
                GitHub
              </div>
            </button>
          </div>
        </StyledButtons>
      </form>
    </div>
  );
}