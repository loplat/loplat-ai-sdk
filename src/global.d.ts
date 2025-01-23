export {};

declare global {
  interface Window {
    ChatWidget: {
      init: () => void;
      highlightText: ({
        keyword,
        nth,
        highlightClass,
      }: {
        keyword: string;
        nth?: number;
        highlightClass?: string;
      }) => void;
    };
  }
}
