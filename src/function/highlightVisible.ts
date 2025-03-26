export const HIGHLIGHT_VISIBLE = "highlight-visible";

// Root node를 순회하며 observer에 등록
const traverseNodes = (node: Node, observer: IntersectionObserver) => {
  const isOuterNode =
    node.nodeType === Node.ELEMENT_NODE &&
    node.nodeName !== "SCRIPT" &&
    node.nodeName !== "STYLE";

  if (isOuterNode) {
    Array.from(node.childNodes).forEach((child) =>
      traverseNodes(child, observer)
    );
  } else if (node.parentElement) {
    observer.observe(node.parentElement);
  }
};

const highlightVisible = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement; // HTMLElement로 타입 지정;

        if (entry.isIntersecting) {
          target.classList.add(HIGHLIGHT_VISIBLE);
        } else {
          target.classList.remove(HIGHLIGHT_VISIBLE);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% 이상 보일 때 트리거
    }
  );

  traverseNodes(document.body, observer);
};

export default highlightVisible;
