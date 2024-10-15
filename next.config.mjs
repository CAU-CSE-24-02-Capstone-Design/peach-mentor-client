/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 카카오 소셜 로그인
      {
        source: '/oauth/kakao',
        destination:
          'https://kauth.kakao.com/oauth/authorize?client_id=YOUR_KAKAO_CLIENT_ID&redirect_uri=http://localhost:3000/oauth/kakao/callback&response_type=code',
        permanent: false,
      },
      // 네이버 소셜 로그인
      {
        source: '/oauth/naver',
        destination:
          'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=YOUR_NAVER_CLIENT_ID&redirect_uri=http://localhost:3000/oauth/naver/callback&state=STATE_STRING',
        permanent: false,
      },
      // 구글 소셜 로그인
      {
        source: '/oauth/google',
        destination:
          'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=http://localhost:3000/oauth/google/callback&response_type=code&scope=email%20profile',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
