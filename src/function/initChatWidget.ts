import { createChatBtn, createChatWrapper } from './createChatElement';

const init = () => {
  const loplatNewAiBtn = createChatBtn();
  const loplatNewAiPopup = createChatWrapper();

  document.body.appendChild(loplatNewAiBtn);
  document.body.appendChild(loplatNewAiPopup);

  let isOpen = false;

  loplatNewAiBtn.addEventListener('click', () => {
    loplatNewAiPopup.style.display = !isOpen ? 'block' : 'none';
    window.dispatchEvent(new Event('popstate'));
    isOpen = !isOpen;
  });

  let isInternalChange = false;

  window.addEventListener('popstate', () => {
    if (isInternalChange) {
      isInternalChange = false;
      return;
    }

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
    if (!arguments[0].isReplace) {
      window.dispatchEvent(new Event('popstate'));
    }
  };

  const originalReplaceState = history.replaceState;
  history.replaceState = function (...args) {
    arguments[0].isReplace = true;
    originalReplaceState.apply(this, args);
  };

  window.addEventListener('message', (e) => {
    const { data } = e;
    const isHighlightMessage =
      'type' in data && data.type === 'highlight' && 'value' in data;
    if (!isHighlightMessage) {
      return;
    }
    window.ChatWidget.highlightText(`${e.data.value}`);
  });
};

export default init;
