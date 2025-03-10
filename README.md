해당 프로젝트는 loplat-new-ai에 접근가능한 위젯을 다루고 있음.
loplat-new-ai를 iframe으로 호출하고 있으며 Vanilla JS로 구성됨.
이는 프레임워크 및 라이브러리 사용을 최소화하여 가벼운 용량의 SDK를 만들기 위함.
(만약 react 등의 라이브러리를 사용하면서, 가벼운 용량의 SDK를 제공할 수 있다면 Migration 하길 권장)

## How to use

- yarn install
- yarn build
- 생성된 dist폴더 하위 파일을 직접 사용하거나 cdn을 통해 제공
  - https://cdn.jsdelivr.net/gh/loplat/loplat-ai-sdk@main/dist/chat-widget.iife.js
  - https://cdn.jsdelivr.net/gh/loplat/loplat-ai-sdk@main/dist/chat-widget.css
  - https://cdn.jsdelivr.net/gh/loplat/loplat-ai-sdk@main/dist/ai_bot.png
  cf) jsdelivr외에 적절한 방법을 찾지 못함.
```
  <script
    dangerouslySetInnerHTML={{
      __html: `  
        (function () {
          var w = window;
          function load() {
            if (w.ChatWidget) {
              return;
            }
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://cdn.jsdelivr.net/gh/loplat/loplat-ai-sdk@main/dist/chat-widget.iife.js';
            var x = document.getElementsByTagName('script')[0];
            if (x.parentNode) {
              x.parentNode.insertBefore(s, x);
            }
          }

          if (document.readyState === 'complete') {
            load();
          } else {
            w.addEventListener('DOMContentLoaded', load);
            w.addEventListener('load', load);
          }
        })();
      `,
    }}
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/loplat/loplat-ai-sdk@main/dist/chat-widget.css" />
```

## Project Description
- CDN으로 해당 프로젝트의 JS파일을 불러오게 되면 window 객체에 "ChatWidget"이란 key로 "init"과 "highlightText"라는 이름의 함수들을 등록함
  - 해당 "ChatWidget"이라는 key이름을 변경하고 싶다면 아래 두파일 수정
    - {root}/src/main.ts
    - {root}/src/global.d.ts
- "init" 함수가 실행되면 (등록과 동시에 최초 1회 실행됨), loplatNewAiBtn과 loplatNewAiPopup을 생성하여 document.body의 children으로 등록
  - loplatNewAiBtn : "loplat-new-ai-btn"이란 ID를 가지고 있는 button tag
  - loplatNewAiPopup : "loplat-new-ai-popup"이란 ID를 가지고 있는 div tag
  - loplatNewAiPopup은 최초 display hidden 상태이고 loplatNewAiBtn 클릭 시 block으로 변경
- 그와 동시에 클라이언트와 iframe이 Post Message 통신을 할 수 있도록 하기 이벤트들을 추적/등록
  - 클라이언트의 URL 변경
  - "message" event listener
    - "HIGHLIGHT", "COPY", "TOGGLE" 등의 이벤트 관리
    - "HIGHLIGHT" : AI-CHAT에서 클라이언트의 특정 text에 강조 표시를 하고 싶을 때 
    - "COPY" : AI-CHAT의 답변 내용을 유저가 복사하고자 할 때
    - "TOGGLE" : AI-CHAT의 닫기 버튼을 유저가 클릭했을 때
  - "click" event listener
    - 유저의 마우스 클릭을 AI-CHAT에게 전달
      - 현재 이 기능을 사용하지는 않음. (25.03.10 기준)
      - 다만 추후 유저의 클릭 퍼널을 추적하고자 할 때 사용할 예정