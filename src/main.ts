import { createChatBtn, createChatWrapper } from './createChatElement';
import './style.css';

(() => {
  const init = () => {
    const loplatNewAiBtn = createChatBtn();
    const loplatNewAiPopup = createChatWrapper();

    document.body.appendChild(loplatNewAiBtn);
    document.body.appendChild(loplatNewAiPopup);

    let isOpen = false;

    loplatNewAiBtn.addEventListener('click', () => {
      loplatNewAiPopup.style.display = !isOpen ? 'block' : 'none';
      isOpen = !isOpen;
    });

    window.addEventListener('popstate', () => {
      const currentUrl = window.location.href;
      const iframe = loplatNewAiPopup.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow?.postMessage(
          { type: 'URL_CHANGE', url: currentUrl },
          '*'
        );
      }
    });

    // History API를 사용하는 경우 pushState/replaceState를 감싸는 코드
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      window.dispatchEvent(new Event('popstate'));
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      window.dispatchEvent(new Event('popstate'));
    };
  };

  // 전역 객체에 위젯 초기화 함수 등록
  window.ChatWidget = {
    init,
  };

  init();
})();
