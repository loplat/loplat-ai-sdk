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
  };

  // 전역 객체에 위젯 초기화 함수 등록
  window.ChatWidget = {
    init,
  };

  init();
})();
