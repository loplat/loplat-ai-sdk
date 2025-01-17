(function () {
  'use strict';
  (() => {
    const e = () => {
      const n = document.getElementById('loplat-new-ai-btn'),
        l = document.getElementById('loplat-new-ai-popup');
      let t = !1;
      n &&
        l &&
        n.addEventListener('click', () => {
          (l.style.display = t ? 'none' : 'block'), (t = !t);
        });
    };
    (window.ChatWidget = { init: e }), e();
  })();
})();
