(() => {
  const $=s=>document.querySelector(s);
  const host=['Choose one detail of the setting that makes the Guest curious.','Leave one clue without explaining it.','Decide whether to keep the next signal subtle or playful.','Choose the shared atmosphere before the Locked Door opens.'];
  const guest=['Notice one detail the Host has chosen, but do not ask about it yet.','Decide whether to follow the clue or redirect the scene.','Choose the moment you want the Host to notice you most.','Decide what you would like to discover, using only your shared themes.'];
  const s=document.createElement('style');s.textContent='#privatePath{display:none;position:fixed;inset:0;z-index:10;background:#0d0610f5;place-items:center;padding:20px}#privatePath.open{display:grid}#privatePath>div{max-width:500px;border:1px solid #8b4e6b;background:#29101f;padding:38px;text-align:center}#privatePath p{font:10px DM Mono;color:#d8b473;letter-spacing:.15em}#privatePath h2{font:42px Playfair Display;margin:12px}#privatePath article{color:#c0aab5;margin:auto}#privatePath button{margin-top:25px;border:0;background:#e7a5b9;color:#260e1d;padding:14px 18px;font-weight:bold;cursor:pointer}';document.head.appendChild(s);
  const modal=document.createElement('section');modal.id='privatePath';document.body.appendChild(modal);
  function reveal(role,mission,done){modal.innerHTML='<div><p>PASS THE PHONE · '+role.toUpperCase()+'</p><h2>Your private mission</h2><article>'+mission+'</article><button>Keep my secret →</button></div>';modal.classList.add('open');modal.querySelector('button').onclick=()=>{modal.classList.remove('open');done()}};
  const old=$('#next').onclick;
  $('#next').onclick=()=>{const round=parseInt($('#counter').textContent.match(/\d+/)?.[0]||'1')-1;if(round>=4)return old();reveal('The Host',host[round],()=>reveal('The Guest',guest[round],old))};
})();
