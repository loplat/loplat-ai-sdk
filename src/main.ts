import './style.css';

(() => {
  const init = () => {
    const loplatNewAiBtn = document.getElementById('loplat-new-ai-btn');
    const loplatNewAiPopup = document.getElementById('loplat-new-ai-popup');

    let isOpen = false;

    if (loplatNewAiBtn && loplatNewAiPopup)
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
