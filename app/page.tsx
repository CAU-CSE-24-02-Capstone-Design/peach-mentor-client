"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import SocialLoginButton from '../components/buttons/SocialLoginButton';

const LottieAnimation = dynamic(() => import('../components/LottieAnimation'), { ssr: false });

export default function Home() {
  const router = useRouter();

  const handleLogin = (provider: string) => {
    console.log(`${provider} 로그인`);
    if (provider === '카카오') {
      // 임시로 카카오 로그인을 클릭하면 메인 페이지로 이동하게 설정 (연결 예정)
      router.push('/main');
    }
  };

  return (
    <div className="max-w-[450px] h-screen flex flex-col items-center justify-center mx-auto bg-primary-50">
      <h1 className="text-[40px] text-white font-paperlogy-heading mb-8">복숭아멘토</h1>
      <div className="mb-8">
        <LottieAnimation />
      </div>
      <div className="flex flex-col space-y-6">
        <SocialLoginButton provider="카카오" onClick={() => handleLogin('카카오')} style={{ backgroundColor: '#FEE500' }} />
        <SocialLoginButton provider="구글" onClick={() => handleLogin('구글')} style={{ backgroundColor: '#FFFFFF' }} />
        <SocialLoginButton provider="네이버" onClick={() => handleLogin('네이버')} style={{ backgroundColor: '#2DB400' }} />
      </div>
    </div>
  );
}
