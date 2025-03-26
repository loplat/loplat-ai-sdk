// node 파싱을 위한 타입
type ParsedData = { tag: string; text: string };

// 2) [visibleDom, invisibleDom] 반환 함수 - parseNode를 활용하여 최적화된 DOM 데이터 생성
function parseVisibleAndInvisibleNodesWithObserver(
  timeout = 500
): Promise<[ParsedData[], ParsedData[]]> {
  return new Promise((resolve) => {
    // "끝내 한 번도 안 보인" vs. "보인" 구분을 위한 집합
    const appearedElements: Element[] = [];
    const invisibleElements: Element[] = [];

    // body 하위 모든 요소
    const allElements = document.body.querySelectorAll("*");

    // Observer: 요소가 보이면 appearedElements에만 기록
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          appearedElements.push(entry.target as Element);
          // 중복 관찰 방지
          observer.unobserve(entry.target);
        } else {
          invisibleElements.push(entry.target as Element);
        }
      });
    });

    // 모든 요소 관찰 시작
    const parsedAllElements = parseAllElements(allElements);
    // console.log('=== 모든 요소 파싱 결과 ===');
    // console.log(parsedAllElements);
    parsedAllElements.forEach((el) => observer.observe(el));

    // timeout 후 관찰 종료 & parseNode로 분류
    setTimeout(() => {
      observer.disconnect();

      const visibleDom: ParsedData[] = Array.from(appearedElements).map(
        (el) => {
          const text = el.textContent?.trim() ?? "";
          return { tag: el.tagName.toLowerCase(), text };
        }
      );

      const invisibleDom: ParsedData[] = Array.from(invisibleElements).map(
        (el) => {
          const text = el.textContent?.trim() ?? "";
          return { tag: el.tagName.toLowerCase(), text };
        }
      );

      resolve([visibleDom, invisibleDom]);
    }, timeout);
  });
}

const parseAllElements = (elements: NodeListOf<Element>): Element[] => {
  const parsedAllElements: Element[] = [];

  // 개별 엘리먼트에 대해 재귀적으로 탐색하는 헬퍼 함수
  function collectDeepestElements(el: Element) {
    // noscript로 감싸져 있는 경우 무시
    if (el.tagName.toLowerCase() === "noscript") {
      return;
    }

    // 자식 엘리먼트가 하나도 없다면(leaf)
    if (el.children.length === 0) {
      // 실제 텍스트가 있는지 확인
      const text = el.textContent?.trim() ?? "";
      if (text.length > 0) {
        parsedAllElements.push(el);
      }
    } else {
      // 자식이 있으면 자식들에 대해 재귀 호출
      Array.from(el.children).forEach((child) => collectDeepestElements(child));
    }
  }

  // NodeListOf<Element>를 순회하며 각각 collectDeepestElements에 전달
  elements.forEach((el) => collectDeepestElements(el));

  return parsedAllElements;
};

export { parseVisibleAndInvisibleNodesWithObserver, type ParsedData };
