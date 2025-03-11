import { DotLottie } from '@lottiefiles/dotlottie-web';
import { createChatBtn, createChatWrapper } from './createChatElement';
import highlightVisible, { HIGHLIGHT_VISIBLE } from './highlightVisible';
import { CHAT_TOGGLE_BUTTON_ID, CHAT_POPUP_ID, EVENT_TYPE } from './const';

type BaseSendPostMsgToIframeType = {
  popup: HTMLDivElement;
};

type SendPostMsgToIframeURLChangeType = BaseSendPostMsgToIframeType & {
  type: typeof EVENT_TYPE.URL_CHANGE;
  url: string;
};

type SendPostMsgToIframeMouseClickType = BaseSendPostMsgToIframeType & {
  type: typeof EVENT_TYPE.MOUSE_CLICK;
  x: number;
  y: number;
  tagPath?: string;
  tagContent?: string;
};

type SendPostMsgToIframeType =
  | SendPostMsgToIframeURLChangeType
  | SendPostMsgToIframeMouseClickType;

let timer: null | NodeJS.Timeout = null;
let isOpen = false;

const toggleChat = () => {
  const loplatNewAiBtn = document.querySelector(`#${CHAT_TOGGLE_BUTTON_ID}`);
  const loplatNewAiPopup = document.querySelector<HTMLDivElement>(
    `#${CHAT_POPUP_ID}`
  );

  if (!(loplatNewAiPopup && loplatNewAiBtn)) {
    return;
  }

  isOpen = !isOpen;
  if (timer) {
    clearTimeout(timer);
  }

  loplatNewAiBtn.classList.toggle('toggled');
  loplatNewAiBtn.textContent = !isOpen ? '전문가 호출' : '상담중 ✨';

  if (isOpen) {
    loplatNewAiPopup.classList.remove('disappear');
    loplatNewAiPopup.classList.add('appear');
    window.dispatchEvent(new Event('popstate'));
  } else {
    loplatNewAiPopup.classList.add('disappear');
    timer = setTimeout(function () {
      loplatNewAiPopup.classList.remove('appear');
    }, 1001);
  }
};

const sendPostMsgToIframe = ({
  popup,
  type,
  ...rest
}: SendPostMsgToIframeType) => {
  const iframe = popup.querySelector('iframe');
  if (iframe) {
    iframe.contentWindow?.postMessage({ type, value: rest }, '*');
  }
};

const popStateHandler = (loplatNewAiPopup: HTMLDivElement) =>
  sendPostMsgToIframe({
    popup: loplatNewAiPopup,
    type: EVENT_TYPE.URL_CHANGE,
    url: window.location.href,
  });

const messageEventHandler = (e: MessageEvent) => {
  const { data } = e;
  // data가 객체인지 확인
  if (typeof data !== 'object' || data === null) {
    return; // data가 객체가 아닌 경우 처리하지 않음
  }

  const hasType = 'type' in data;
  if (!hasType) {
    return;
  }

  switch (data.type) {
    case EVENT_TYPE.HIGHLIGHT:
      window.ChatWidget.highlightText({
        keyword: `${data.value.keyword}`,
        nth: Number(data.value.nth ?? 1),
      });
      break;
    case EVENT_TYPE.COPY:
      window.navigator.clipboard.writeText(data.value);
      break;
    case EVENT_TYPE.TOGGLE:
      toggleChat();
      break;
    default:
      return;
  }
};

const userClickHandler = (e: MouseEvent, loplatNewAiPopup: HTMLDivElement) => {
  const element = e.target;
  if (!element) {
    return;
  }

  const position = { x: e.clientX, y: e.clientY };

  if (!(element instanceof HTMLElement)) {
    return sendPostMsgToIframe({
      popup: loplatNewAiPopup,
      type: 'MOUSE_CLICK',
      ...position,
    });
  }

  const tagName = element.tagName;
  const tagId = element.id ? `#${element.id}` : '';
  const tagClasses = element.className
    ? `.${element.className
        .split(' ')
        .filter((className) => className !== HIGHLIGHT_VISIBLE)
        .join('.')}`
    : '';
  const tagPath = `${tagName}${tagId}${tagClasses}`;

  return sendPostMsgToIframe({
    popup: loplatNewAiPopup,
    type: 'MOUSE_CLICK',
    ...position,
    tagPath,
    tagContent: element.innerText,
  });
};

const init = () => {
  const loplatNewAiBtn = createChatBtn();
  const loplatNewAiPopup = createChatWrapper();

  document.body.appendChild(loplatNewAiBtn);
  document.body.appendChild(loplatNewAiPopup);

  const canvas = document.querySelector<HTMLCanvasElement>('#iframe-loading');
  if (canvas) {
    new DotLottie({
      canvas,
      src: 'https://lottie.host/9ff45170-514a-4812-aefc-ded4e03b1bdc/sIkKDTDuJY.lottie',
      loop: true,
      autoplay: true,
      layout: {
        fit: 'fit-width',
        align: [0.5, 0.5],
      },
    });
  }

  loplatNewAiBtn.addEventListener('click', toggleChat);

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

  window.addEventListener('popstate', () => popStateHandler(loplatNewAiPopup));
  window.addEventListener('message', messageEventHandler);
  window.addEventListener('click', (e) =>
    userClickHandler(e, loplatNewAiPopup)
  );

  // DOMContentLoaded 여부 확인 및 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightVisible);
  } else {
    highlightVisible(); // DOM이 이미 로드된 상태라면 즉시 실행
  }
};

export default init;
