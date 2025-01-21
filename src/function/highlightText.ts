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

const traverseNodes = (node: Node, keyword: string, highlightClass: string) => {
  const isOuterNode =
    node.nodeType === Node.ELEMENT_NODE &&
    node.nodeName !== 'SCRIPT' &&
    node.nodeName !== 'STYLE';

  if (isOuterNode) {
    return Array.from(node.childNodes).forEach((node) =>
      traverseNodes(node, keyword, highlightClass)
    );
  }

  const isTextNode =
    node.nodeType === Node.TEXT_NODE && Boolean(node.nodeValue);

  if (!isTextNode) {
    return;
  }

  const nodeValue = node.nodeValue ?? '';
  const parent = node.parentElement;

  if (nodeValue.includes(keyword) && parent) {
    const regex = new RegExp(`(${keyword})`, 'gi');
    const highlightedHTML = nodeValue.replace(
      regex,
      `<span class="${highlightClass}">$1</span>`
    );
    const wrapper = document.createElement('span');
    wrapper.innerHTML = highlightedHTML;
    parent.replaceChild(wrapper, node);
  }
};

const highlightText = (keyword: string, highlightClass = 'highlight') => {
  if (!keyword) return;

  removeHighlights(highlightClass);
  traverseNodes(document.body, keyword, highlightClass);
};

export default highlightText;
