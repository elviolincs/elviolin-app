import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elviolin.app',
  appName: '엘 바이올린',
  // 별도 웹 자산을 번들에 넣지 않고, 실제 배포된 사이트를 그대로 웹뷰로 띄운다.
  // webDir은 cap이 요구해서 형식상 남겨두지만 server.url이 있으면 그쪽이 우선한다.
  webDir: 'www',
  server: {
    // 마케팅 홈이 아니라, 저장된 개인 토큰으로 내 포털(레슨일지/정산)로 자동 이동하는 화면에서 시작한다.
    url: 'https://elviolin.kr/앱시작',
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
