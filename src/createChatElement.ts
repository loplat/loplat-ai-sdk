export const createChatBtn = (id = 'loplat-new-ai-btn') => {
  const button = document.createElement('button');
  button.id = id;
  return button;
};

export const createChatWrapper = (
  id = 'loplat-new-ai-popup',
  iframeURL = 'https://loplat-chatbot-320524274389.asia-northeast3.run.app/'
) => {
  const wrapper = document.createElement('div');
  wrapper.id = id;
  wrapper.innerHTML = `
      <iframe
        src=${iframeURL}
        class="loplat-new-ai"
      >
      </iframe>
  `;
  return wrapper;
};
