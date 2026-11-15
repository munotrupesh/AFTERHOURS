(() => {
  const $=s=>document.querySelector(s), path=[];
  document.addEventListener('click',e=>{if(e.target.matches('#choices button'))path.push(e.target.textContent)},true);
  const next=$('#next').onclick;
  $('#next').onclick=()=>{
    const final=/5/.test($('#counter').textContent);
    next();
    if(final){
      const text=path.join(' ').toLowerCase();
      let title='The Quiet Alibi', body='You leave with a private memory and an unfinished invitation for another night.';
      if(text.includes('clue')||text.includes('written')){title='The Unsent Note';body='One clue remains between you. Keep it, change it, or let it become the invitation for the next episode.'}
      else if(text.includes('music')||text.includes('playful')){title='The Last Table';body='The night changed its rhythm because you chose it together. Your next invitation will begin from that mood.'}
      else if(text.includes('bold')||text.includes('enter')){title='The Locked Door';body='You opened a shared door carefully, on your own terms. The next Fantasy Night can explore only what you both choose again.'}
      $('#finish h2').innerHTML=title+'<br><i>belongs to you.</i>';
      $('#finish article').textContent=body;
    }
  };
})();
