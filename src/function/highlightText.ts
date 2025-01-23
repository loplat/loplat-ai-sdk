// 기존 highlightClass를 제거하는 함수
const removeHighlights = (highlightClass: string) => {
  const highlightedElements = document.querySelectorAll(`.${highlightClass}`);
  highlightedElements.forEach((element) => {
    const parent = element.parentElement;
    if (parent) {
      // 텍스트 노드로 복원
      parent.replaceChild(
        document.createTextNode(element.textContent || ''),
        element
      );
    }
  });
};

const traverseNodes = ({
  node,
  keyword,
  currentIdx = { value: 1 },
  targetIdx,
  highlightClass,
}: {
  node: Node;
  keyword: string;
  currentIdx?: { value: number };
  targetIdx: number;
  highlightClass: string;
}) => {
  const isTextNode =
    node.nodeType === Node.TEXT_NODE && Boolean(node.nodeValue);

  if (isTextNode) {
    const nodeValue = node.nodeValue ?? '';
    const parent = node.parentElement;

    if (nodeValue.includes(keyword) && parent) {
      if (currentIdx.value === targetIdx) {
        const regex = new RegExp(`(${keyword})`, 'gi');
        const highlightedHTML = nodeValue.replace(
          regex,
          `<span class="${highlightClass}">$1</span>`
        );
        const wrapper = document.createElement('span');
        wrapper.innerHTML = highlightedHTML;
        parent.replaceChild(wrapper, node);

        // 스크롤을 화면 상단에 위치시키고 50px 여유 두기
        const rect = wrapper.getBoundingClientRect();
        const offset = 200; // 여유 공간
        window.scrollTo({
          top: rect.top + window.scrollY - offset,
          behavior: 'smooth', // 스무스 스크롤
        });
      }
      currentIdx.value += 1;
    }
  }

  const isOuterNode =
    node.nodeType === Node.ELEMENT_NODE &&
    node.nodeName !== 'SCRIPT' &&
    node.nodeName !== 'STYLE';

  if (isOuterNode) {
    Array.from(node.childNodes).forEach((childNode) =>
      traverseNodes({
        node: childNode,
        keyword,
        currentIdx,
        targetIdx,
        highlightClass,
      })
    );
  }
};

const highlightText = ({
  keyword,
  nth = 1,
  highlightClass = 'highlight',
}: {
  keyword: string;
  nth?: number;
  highlightClass?: string;
}) => {
  if (!keyword) return;

  removeHighlights(highlightClass);
  traverseNodes({
    node: document.body,
    keyword,
    targetIdx: nth,
    highlightClass,
  });
};

export default highlightText;
