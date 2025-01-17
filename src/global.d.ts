export {};

declare global {
  interface Window {
    ChatWidget: {
      init: () => void;
    };
  }
}
