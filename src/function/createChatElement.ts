export const createChatBtn = (id = 'loplat-new-ai-btn') => {
  const button = document.createElement('button');
  button.id = id;
  return button;
};

export const createChatWrapper = (
  id = 'loplat-new-ai-popup',
  iframeURL = 'https://loplat-chatbot-320524274389.asia-northeast3.run.app/ai-agent-nav'
  // iframeURL = 'http://localhost:3000/ai-agent-nav'
) => {
  const wrapper = document.createElement('div');
  wrapper.id = id;
  wrapper.className = 'loading';

  const iframe = document.createElement('iframe');
  iframe.className = 'loplat-new-ai';
  iframe.style.display = 'none';
  iframe.src = iframeURL;

  const lottie = document.createElement('canvas');
  lottie.id = 'iframe-loading';

  wrapper.appendChild(iframe);
  wrapper.appendChild(lottie);

  iframe.onload = () => {
    // wrapper.className = '';
    // wrapper.removeChild(lottie);
    // iframe.style.display = 'block';
  };

  return wrapper;
};

// export const createChatWrapper = (
//   id = 'loplat-new-ai-popup',
//   iframeURL = 'https://loplat-chatbot-320524274389.asia-northeast3.run.app/ai-agent-nav'
// ) => {
//   // Wrapper 생성
//   const wrapper = document.createElement('div');
//   wrapper.id = id;

//   // Lottie 스크립트 추가
//   const script = document.createElement('script');
//   script.src =
//     'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
//   script.type = 'module';

//   script.onload = () => {
//     // Lottie 애니메이션 추가 (스크립트 로드 후 생성)
//     const lottie = document.createElement(
//       'dotlottie-player'
//     ) as HTMLDivElement & {
//       src: string;
//       background: string;
//       speed: number;
//       loop: boolean;
//       autoplay: boolean;
//     };

//     lottie.src =
//       'https://lottie.host/9ff45170-514a-4812-aefc-ded4e03b1bdc/sIkKDTDuJY.lottie';
//     lottie.background = 'transparent';
//     lottie.speed = '1';
//     lottie.direction = '1';
//     lottie.playMode = 'forward';
//     lottie.style.width = '300px';
//     lottie.style.height = '300px';
//     lottie.loop = true;
//     lottie.autoplay = true;
//     lottie.controls = false;

//     // iframe 생성 (초기에는 숨김)
//     const iframe = document.createElement('iframe');
//     iframe.className = 'loplat-new-ai';
//     iframe.src = iframeURL;
//     iframe.style.display = 'none';

//     // iframe 로딩 완료 시 Lottie 제거 & iframe 표시
//     iframe.onload = () => {
//       // wrapper.removeChild(lottie); // Lottie 삭제
//       // iframe.style.display = 'block'; // iframe 표시
//     };

//     // Wrapper에 요소 추가
//     wrapper.appendChild(lottie);
//     wrapper.appendChild(iframe);
//   };

//   // Lottie 스크립트 추가
//   document.head.appendChild(script);

//   return wrapper;
// };
