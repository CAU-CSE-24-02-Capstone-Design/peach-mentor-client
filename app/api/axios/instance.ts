import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create();

instance.defaults.withCredentials = true;

// 요청 인터셉터 : API 호출 전에 실행
instance.interceptors.request.use(
  function (config) {
    // 쿠키에서 accessToken을 가져온다
    const accessToken = Cookies.get('accessToken');
    console.log(accessToken);

    // accessToken이 있으면 요청 헤더에 추가한다
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // 요청 오류 처리
    return Promise.reject(error);
  },
);

// 응답 인터셉터 : 응답을 받기 전에 실행 (토큰 재인증, 자동 로그아웃 처리)
instance.interceptors.response.use(
  async function (response) {
    // 응답 데이터 처리 (정상 응답)
    return response;
  },
  async function (error) {
    const { config, response } = error;

    if (!response) {
      console.error('Network or server error', error);
      return Promise.reject(error);
    }

    // 백엔드에서 걸리는 JWT 관련 에러 처리
    const { status, data } = response;
    console.log(response);

    if (status === 401) {
      if (data.message === '토큰이 없습니다') {
        await Logout();
      }

      if (data.message === '유효하지 않은 토큰') {
        try {
          const tokenReissueResult = await instance.post(
            'http://localhost:8080/reissue',
          );

          if (tokenReissueResult.status === 200) {
            // 토큰 재발급 성공 시, 새로운 토큰을 쿠키에 저장
            const accessToken =
              tokenReissueResult.headers['Authorization'] ||
              tokenReissueResult.headers['authorization'];
            Cookies.set('accessToken', accessToken);

            // 토큰 재발급 성공 후, API 재요청
            console.log('토큰 재발급 성공');
            return instance(config);
          } else {
            await Logout();
          }
        } catch (e) {
          // 'e'로 변수명을 변경하여 사용하지 않는 변수 오류를 피한다
          console.error('Token reissue error:', e);
          await Logout(); // 여기서 Logout 호출
        }
      }
    }

    return Promise.reject(error);
  },
);

const Logout = async () => {
  try {
    await instance.post('http://localhost:8080/logout');
    Cookies.remove('accessToken');
    window.location.href = '/';
  } catch (err) {
    console.error('로그아웃 오류 발생:', err);
  }
};

export default instance;
