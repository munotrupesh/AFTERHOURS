(() => {
  const start=document.querySelector('[data-go="room"]'); if(!start)return;
  const style=document.createElement('style');style.textContent='#invite{display:none;position:fixed;inset:0;z-index:20;background:radial-gradient(circle,#52203d,#100711 65%);place-items:center;padding:20px}#invite.open{display:grid}#invite>div{max-width:600px;text-align:center}#invite p{font:10px DM Mono;color:#d8b473;letter-spacing:.17em}#invite h2{font:600 56px/1 Playfair Display;margin:16px}#invite h2 i{color:#e7a5b9}#invite article{color:#c0aab5;margin:auto}#invite button{margin-top:28px;background:#e7a5b9;color:#260e1d;border:0;padding:15px 20px;font-weight:bold;cursor:pointer}';document.head.appendChild(style);
  const panel=document.createElement('section');panel.id='invite';panel.innerHTML='<div><p>TONIGHT · 9:30 PM · FOR TWO</p><h2>An invitation has<br><i>your names on it.</i></h2><article>Somewhere after the usual evening ends, a private table is waiting. One of you arranged it. The other does not yet know why.</article><button>Open our private invitation →</button></div>';document.body.appendChild(panel);
  const original=start.onclick;start.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();panel.classList.add('open')},true);panel.querySelector('button').onclick=()=>{panel.classList.remove('open');original()};
})();

