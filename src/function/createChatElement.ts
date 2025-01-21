export const createChatBtn = (id = 'loplat-new-ai-btn') => {
  const button = document.createElement('button');
  button.id = id;
  return button;
};

export const createChatWrapper = (
  id = 'loplat-new-ai-popup',
  iframeURL = 'http://localhost:5001/'
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
