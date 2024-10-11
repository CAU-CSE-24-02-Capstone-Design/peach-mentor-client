"use client";

import React from 'react';

interface SocialLoginButtonProps {
  provider: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider, onClick, style }) => {
  return (
    <button
      className="w-[300px] p-4 text-grayscale-110 rounded-lg hover:opacity-90 transition font-paperlogy-title"
      onClick={onClick}
      style={style}
    >
      {provider} 로그인
    </button>
  );
};

export default SocialLoginButton;
