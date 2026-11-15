(() => {
  const $=s=>document.querySelector(s);
  const prior=$('#next').onclick;
  $('#next').onclick=()=>{
    const final=/5/.test($('#counter').textContent);
    prior();
    if(!final)return;
    setTimeout(()=>{
      const log=window.alibiMissionLog||[];
      const host=log.filter(x=>x.role==='Host').map(x=>x.choice);
      const guest=log.filter(x=>x.role==='Guest').map(x=>x.choice);
      const finish=$('#finish article');
      if(!log.length){finish.textContent='Your Alibi stays unwritten. Start again and let both private roles shape the night.';return}
      finish.textContent='Your Alibi remembers that the Host chose “'+(host[host.length-1]||'their secret')+'” and the Guest chose “'+(guest[guest.length-1]||'their secret')+'.” The next invitation can begin from those choices.';
    },0);
  };
})();
