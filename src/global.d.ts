export {};

declare global {
  interface Window {
    ChatWidget: {
      init: () => void;
      highlightText: (keyword: string, highlightClass?: string) => void;
    };
  }
}
