import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elviolin.app',
  appName: '엘 바이올린',
  // 별도 웹 자산을 번들에 넣지 않고, 실제 배포된 사이트를 그대로 웹뷰로 띄운다.
  // webDir은 cap이 요구해서 형식상 남겨두지만 server.url이 있으면 그쪽이 우선한다.
  webDir: 'www',
  server: {
    url: 'https://elviolin.kr',
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
