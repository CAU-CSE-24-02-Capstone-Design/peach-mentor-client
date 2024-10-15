'use client';

import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';

axios.defaults.withCredentials = true;

const NaverRedirectPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOAuthNaver = async (code: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/oauth/login/naver?code=${code}`,
      );
      if (response.data.isSuccess) {
        const accessToken =
          response.headers['Authorization'] ||
          response.headers['authorization'];
        localStorage.setItem('accessToken', accessToken);

        router.push('/main');
      } else {
        console.error('OAuth2 로그인 오류');
        console.log(response.data.code);
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('로그인 실패', error);
    }
  };

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      handleOAuthNaver(code);
    }
  }, [searchParams]);

  return <div>Processing...</div>;
};

export default NaverRedirectPage;
