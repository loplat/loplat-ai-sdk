(function(){"use strict";const o=(e="loplat-new-ai-btn")=>{const t=document.createElement("button");return t.id=e,t},i=(e="loplat-new-ai-popup",t="https://loplat-chatbot-320524274389.asia-northeast3.run.app/")=>{const n=document.createElement("div");return n.id=e,n.innerHTML=`
      <iframe
        src=${t}
        class="loplat-new-ai"
      >
      </iframe>
  `,n};(()=>{const e=()=>{const t=o(),n=i();document.body.appendChild(t),document.body.appendChild(n);let a=!1;t.addEventListener("click",()=>{n.style.display=a?"none":"block",a=!a})};window.ChatWidget={init:e},e()})()})();
