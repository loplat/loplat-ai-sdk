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

  const iframe = document.createElement('iframe');
  iframe.className = 'loplat-new-ai';
  iframe.style.display = 'none';
  iframe.src = iframeURL;

  const lottie = document.createElement('canvas');
  lottie.id = 'iframe-loading';
  lottie.style.width = '100%';
  lottie.style.height = 'auto';

  wrapper.appendChild(iframe);
  wrapper.appendChild(lottie);

  iframe.onload = () => {
    wrapper.removeChild(lottie);
    iframe.style.display = 'block';
  };

  return wrapper;
};
