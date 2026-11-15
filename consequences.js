(() => {
  const $=s=>document.querySelector(s);
  const choices=[
    ['Take the window table','Send a private clue','Stand close enough to be noticed'],
    ['Ask one dangerous question','Offer a private answer','Change the music'],
    ['Keep the signal subtle','Make it playful','Let your partner decide'],
    ['Enter slowly','Change the atmosphere','Choose a shared bold theme'],
    ['Leave a written alibi','Keep one secret','Plan the next invitation']
  ];
  const echoes=[
    'The window reflects both of you. Someone has noticed the choice.',
    'The clue stays between you. It will matter later.',
    'The room changes; the story now follows your mood.'
  ];
  const path=[];
  function chapter(){return Math.max(0,parseInt($('#counter').textContent.match(/\d+/)?.[0]||'1',10)-1)}
  function paint(){
    const i=chapter(),box=$('#choices'); if(!box||!choices[i])return;
    box.innerHTML=choices[i].map((x,n)=>'<button data-choice="'+n+'">'+x+'</button>').join('');
    box.querySelectorAll('button').forEach(b=>b.onclick=()=>{
      path[i]=+b.dataset.choice;
      box.querySelectorAll('button').forEach(x=>x.classList.remove('chosen'));
      b.classList.add('chosen');
      $('#result').textContent='YOUR ALIBI REMEMBERS: '+echoes[+b.dataset.choice];
    });
  }
  const oldNext=$('#next').onclick;
  $('#next').onclick=()=>{
    const isFinal=chapter()===4;
    oldNext();
    if(isFinal){
      const finish=$('#finish article');
      const ending=path.includes(1)?'You leave with a clue only the two of you understand.':'You leave with a private memory and an unfinished invitation.';
      finish.textContent=ending+' Your choices are saved only for this private night.';
    } else setTimeout(paint,0);
  };
  new MutationObserver(paint).observe($('#counter'),{childList:true,subtree:true,characterData:true});
  paint();
})();
