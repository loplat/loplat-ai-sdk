import {
  CHAT_TOGGLE_BUTTON_ID,
  CHAT_POPUP_ID,
  CHAT_IFRAME_CLASSNAME,
} from "./const";

export const createChatBtn = (id = CHAT_TOGGLE_BUTTON_ID) => {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = "전문가 호출";
  button.className = "pulse";

  return button;
};

export const createChatWrapper = (
  id = CHAT_POPUP_ID,
  iframeURL = "https://loplat-chatbot-320524274389.asia-northeast3.run.app/ai-agent-nav"
  // iframeURL = 'http://localhost:3000/ai-agent-nav'
) => {
  const wrapper = document.createElement("div");
  wrapper.className = "hidden";
  wrapper.id = id;

  const iframe = document.createElement("iframe");
  iframe.src = iframeURL;
  iframe.className = CHAT_IFRAME_CLASSNAME;

  const lottie = document.createElement("canvas");
  lottie.id = "iframe-loading";
  lottie.style.width = "100%";
  lottie.style.height = "auto";

  wrapper.appendChild(iframe);
  wrapper.appendChild(lottie);

  iframe.onload = () => {
    wrapper.removeChild(lottie);
    iframe.style.display = "block";
  };

  return wrapper;
};
