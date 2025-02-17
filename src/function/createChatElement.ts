export const createChatBtn = (id = 'loplat-new-ai-btn') => {
  const button = document.createElement('button');
  button.id = id;

  const span = document.createElement('span');
  span.id = 'toggleText';
  span.textContent = '전문가 호출';

  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'icon';
  const icon = document.createElement('img');
  icon.src = '/bot.png';

  iconWrapper.appendChild(icon);
  button.appendChild(span);
  button.appendChild(iconWrapper);
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
  iframe.src = iframeURL;
  iframe.style.display = 'none';
  iframe.className = 'loplat-new-ai';

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
