import { DotLottie } from "@lottiefiles/dotlottie-web";
import { createChatBtn, createChatWrapper } from "./createChatElement";
import highlightVisible, { HIGHLIGHT_VISIBLE } from "./highlightVisible";
import { CHAT_TOGGLE_BUTTON_ID, CHAT_POPUP_ID, EVENT_TYPE } from "./const";
import { parseVisibleAndInvisibleNodesWithObserver } from "./parsedDom";

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

type SendPostMsgToIframeGetDomType = BaseSendPostMsgToIframeType & {
  type: typeof EVENT_TYPE.GET_DOM;
  visibleDom: string;
  invisibleDom: string;
};

type SendPostMsgToIframeType =
  | SendPostMsgToIframeURLChangeType
  | SendPostMsgToIframeMouseClickType
  | SendPostMsgToIframeGetDomType;

let timer: null | ReturnType<typeof setTimeout> = null;
let isOpen = false;

/**
 * 복제된 엘리먼트에서 script/style/link/meta/iframe/noscript 제거,
 * 그리고 모든 속성(attribute)을 삭제해서
 * <div>테스트</div> 처럼 태그+텍스트만 남긴다.
 */
// type StripResult = {
//   visibleDom: ParsedData[];
//   invisibleDom: ParsedData[];
// };

/** script/style/link/meta/iframe/noscript 제거 & 모든 속성 제거 */
// function stripElement(element: Element) {
//   element
//     .querySelectorAll("script, style, link, meta, iframe, noscript")
//     .forEach((el) => {
//       el.remove();
//     });
//   element.querySelectorAll("*").forEach((node) => {
//     [...node.attributes].forEach((attr) => node.removeAttribute(attr.name));
//   });
// }

// function getDomViaObserver(): Promise<StripResult> {
//   return new Promise((resolve) => {
//     const visibleSet = new Set<HTMLElement>();
//     const allElements = Array.from(document.body.children) as HTMLElement[];

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const el = entry.target as HTMLElement;
//           if (entry.isIntersecting) {
//             visibleSet.add(el);
//           } else {
//             visibleSet.delete(el);
//           }
//         });
//       },
//       {
//         root: null,
//         threshold: 0.01, // 1% 이상 보이면 "보인다" 고 간주
//       }
//     );

//     // 모든 직계 자식을 관찰
//     allElements.forEach((el) => observer.observe(el));

//     // 1초 후에 관찰 멈추고 결과를 만들어 반환
//     setTimeout(() => {
//       observer.disconnect();

//       const visibleContainer = document.createElement("div");
//       const invisibleContainer = document.createElement("div");

//       allElements.forEach((el) => {
//         // 깊은 복제
//         const clone = el.cloneNode(true) as Element;
//         // 정제(불필요태그, 속성 제거)
//         stripElement(clone);

//         if (visibleSet.has(el)) {
//           visibleContainer.appendChild(clone);
//         } else {
//           invisibleContainer.appendChild(clone);
//         }
//       });

//       resolve({
//         visibleHtml: visibleContainer.innerHTML,
//         invisibleHtml: invisibleContainer.innerHTML,
//       });
//     }, 1000);
//   });
// }

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

  loplatNewAiBtn.classList.remove("pulse");
  loplatNewAiBtn.classList.toggle("toggled");
  loplatNewAiBtn.textContent = !isOpen ? "전문가 호출" : "상담중 ✨";

  if (isOpen) {
    loplatNewAiPopup.classList.remove("disappear");
    loplatNewAiPopup.classList.add("appear");
    window.dispatchEvent(new Event("popstate"));
  } else {
    loplatNewAiPopup.classList.add("disappear");
    timer = setTimeout(function () {
      loplatNewAiPopup.classList.remove("appear");
    }, 1001);
  }
};

const sendPostMsgToIframe = ({
  popup,
  type,
  ...rest
}: SendPostMsgToIframeType) => {
  const iframe = popup.querySelector("iframe");
  if (iframe) {
    iframe.contentWindow?.postMessage({ type, value: rest }, "*");
  }
};

const popStateHandler = (loplatNewAiPopup: HTMLDivElement) =>
  sendPostMsgToIframe({
    popup: loplatNewAiPopup,
    type: EVENT_TYPE.URL_CHANGE,
    url: window.location.href,
  });

const postDomHandler = async (loplatNewAiPopup: HTMLDivElement) => {
  const [visibleDom, invisibleDom] =
    await parseVisibleAndInvisibleNodesWithObserver();
  console.log("visibleDom", visibleDom);
  console.log("invisibleDom", invisibleDom);
  sendPostMsgToIframe({
    popup: loplatNewAiPopup,
    type: EVENT_TYPE.GET_DOM,
    visibleDom: JSON.stringify(visibleDom),
    invisibleDom: JSON.stringify(invisibleDom),
  });
};

const messageEventHandler = (
  e: MessageEvent,
  loplatNewAiPopup: HTMLDivElement
) => {
  const { data } = e;
  // data가 객체인지 확인
  if (typeof data !== "object" || data === null) {
    return; // data가 객체가 아닌 경우 처리하지 않음
  }

  const hasType = "type" in data;
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
    case EVENT_TYPE.TOGGLE:
      toggleChat();
      break;
    case EVENT_TYPE.GET_DOM: {
      postDomHandler(loplatNewAiPopup);
      break;
    }
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
      type: "MOUSE_CLICK",
      ...position,
    });
  }

  const tagName = element.tagName;
  const tagId = element.id ? `#${element.id}` : "";
  const tagClasses = element.className
    ? `.${element.className
        .split(" ")
        .filter((className) => className !== HIGHLIGHT_VISIBLE)
        .join(".")}`
    : "";
  const tagPath = `${tagName}${tagId}${tagClasses}`;

  return sendPostMsgToIframe({
    popup: loplatNewAiPopup,
    type: "MOUSE_CLICK",
    ...position,
    tagPath,
    tagContent: element.innerText,
  });
};

export const init = () => {
  const loplatNewAiBtn = document.querySelector(`#${CHAT_TOGGLE_BUTTON_ID}`);
  const loplatNewAiPopup = document.querySelector<HTMLDivElement>(
    `#${CHAT_POPUP_ID}`
  );

  if (!(loplatNewAiPopup && loplatNewAiBtn)) {
    return;
  }

  const canvas = document.querySelector<HTMLCanvasElement>("#iframe-loading");
  if (canvas) {
    new DotLottie({
      canvas,
      src: "https://lottie.host/9ff45170-514a-4812-aefc-ded4e03b1bdc/sIkKDTDuJY.lottie",
      loop: true,
      autoplay: true,
      layout: {
        fit: "fit-width",
        align: [0.5, 0.5],
      },
    });
  }

  loplatNewAiBtn.addEventListener("click", toggleChat);

  // History API를 사용하는 경우 pushState/replaceState를 감싸는 코드
  const originalPushState = history.pushState;
  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    if (!arguments[0].isReplace) {
      window.dispatchEvent(new Event("popstate"));
    }
  };

  const originalReplaceState = history.replaceState;
  history.replaceState = function (...args) {
    arguments[0].isReplace = true;
    originalReplaceState.apply(this, args);
  };

  window.addEventListener("popstate", () => popStateHandler(loplatNewAiPopup));
  window.addEventListener("message", (e) =>
    messageEventHandler(e, loplatNewAiPopup)
  );
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleChat();
    }
  });

  // spacebar 눌렀을 때 TEST 이벤트 발생
  window.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      sendPostMsgToIframe({
        popup: loplatNewAiPopup,
        type: EVENT_TYPE.TEST,
        x: 0,
        y: 0,
      });
    }
  });

  window.addEventListener("click", (e) =>
    userClickHandler(e, loplatNewAiPopup)
  );

  // DOMContentLoaded 여부 확인 및 실행
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", highlightVisible);
  } else {
    highlightVisible(); // DOM이 이미 로드된 상태라면 즉시 실행
  }
};

export const submitElement = () => {
  const loplatNewAiBtn = createChatBtn();
  const loplatNewAiPopup = createChatWrapper();

  document.body.appendChild(loplatNewAiBtn);
  document.body.appendChild(loplatNewAiPopup);

  init();
};
