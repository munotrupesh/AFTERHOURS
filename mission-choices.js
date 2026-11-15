(() => {
  const log=[];
  window.alibiMissionLog=log;
  const modal=document.querySelector('#privatePath'); if(!modal)return;
  const observer=new MutationObserver(()=>{
    const done=modal.querySelector('button'); if(!done||done.dataset.enhanced)return;
    done.dataset.enhanced='1'; const proceed=done.onclick;
    const isHost=/HOST/.test(modal.textContent);
    const options=isHost?['Keep it subtle','Make it playful','Save it for later']:['Follow the clue','Change the direction','Keep them guessing'];
    const box=document.createElement('div');
    box.className='missionChoices';
    box.innerHTML=options.map(x=>'<button>'+x+'</button>').join('');
    done.replaceWith(box);
    box.querySelectorAll('button').forEach(b=>b.onclick=()=>{
      log.push({role:isHost?'Host':'Guest',choice:b.textContent});
      modal.querySelector('.missionChoices')?.replaceWith(Object.assign(document.createElement('p'),{textContent:'Private choice saved. Pass the phone when ready.'}));
      const finish=document.createElement('button');finish.textContent='Keep my secret →';
      finish.onclick=()=>proceed();
      modal.querySelector('div div')?.appendChild(finish);
    });
  });
  observer.observe(modal,{childList:true,subtree:true});
})();
