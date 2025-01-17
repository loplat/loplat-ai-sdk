(function(){"use strict";const s=(n="loplat-new-ai-btn")=>{const t=document.createElement("button");return t.id=n,t},c=(n="loplat-new-ai-popup",t="http://localhost:5000/")=>{const e=document.createElement("div");return e.id=n,e.innerHTML=`
      <iframe
        src=${t}
        class="loplat-new-ai"
      >
      </iframe>
  `,e};(()=>{const n=()=>{const t=s(),e=c();document.body.appendChild(t),document.body.appendChild(e);let a=!1;t.addEventListener("click",()=>{e.style.display=a?"none":"block",a=!a}),window.addEventListener("popstate",()=>{var p;const o=window.location.href,i=e.querySelector("iframe");i&&((p=i.contentWindow)==null||p.postMessage({type:"URL_CHANGE",url:o},"*"))});const r=history.pushState;history.pushState=function(...o){r.apply(this,o),window.dispatchEvent(new Event("popstate"))};const l=history.replaceState;history.replaceState=function(...o){l.apply(this,o),window.dispatchEvent(new Event("popstate"))}};window.ChatWidget={init:n},n()})()})();
