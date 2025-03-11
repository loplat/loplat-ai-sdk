import { submitElement, init } from './function/initChatWidget';
import highlightText from './function/highlightText';

import './style.css';

(() => {
  // 전역 객체에 위젯 초기화 함수 등록
  window.ChatWidget = {
    init,
    highlightText,
  };

  submitElement();
})();
