'use client';

import React from 'react';

interface SocialLoginButtonProps {
  provider: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  style,
}) => {
  return (
    <button
      className="w-[300px] rounded-lg p-4 font-paperlogy-title text-grayscale-110 transition hover:opacity-90"
      onClick={onClick}
      style={style}
    >
      {provider} 로그인
    </button>
  );
};

export default SocialLoginButton;
