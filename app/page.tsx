'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import SocialLoginButton from '../components/buttons/SocialLoginButton';

const LottieAnimation = dynamic(() => import('../components/LottieAnimation'), {
  ssr: false,
});

export default function Home() {
  // 소셜 로그인 처리 함수
  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} 로그인`);

    // 각 소셜 로그인 페이지로 리다이렉트
    if (provider === '카카오') {
      window.location.href = '/oauth/kakao/';
    } else if (provider === '네이버') {
      window.location.href = '/oauth/naver';
    } else if (provider === '구글') {
      window.location.href = '/oauth/google';
    }
  };

  return (
    <div className="mx-auto flex h-screen max-w-[450px] flex-col items-center justify-center bg-primary-50">
      <h1 className="mb-8 font-paperlogy-heading text-[40px] text-white">
        복숭아멘토
      </h1>
      <div className="mb-8">
        <LottieAnimation />
      </div>
      <div className="flex flex-col space-y-6">
        <SocialLoginButton
          provider="카카오"
          onClick={() => handleSocialLogin('카카오')}
          style={{ backgroundColor: '#FEE500' }}
        />
        <SocialLoginButton
          provider="구글"
          onClick={() => handleSocialLogin('구글')}
          style={{ backgroundColor: '#FFFFFF' }}
        />
        <SocialLoginButton
          provider="네이버"
          onClick={() => handleSocialLogin('네이버')}
          style={{ backgroundColor: '#2DB400' }}
        />
      </div>
    </div>
  );
}
