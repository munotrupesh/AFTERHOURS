/* Flagship chapter layer: replaces the generic session once a couple launches The Velvet Alibi. */
(() => {
  const $ = s => document.querySelector(s);
  const state = JSON.parse(localStorage.getItem('afterhoursCouple') || '{}');
  const chapters = [
    ['THE INVITATION','I','The Velvet Alibi','A private invitation has arrived. One of you enters as “The Guest”; the other becomes “The Host.” Do not use your usual names until the story says so.'],
    ['THE FIRST CLUE','II','Prove you noticed.','The Host has one secret rule: make the Guest feel recognised without saying exactly why. Draw a card only when both of you are ready.'],
    ['THE PRIVATE SIGNAL','III','Something changes.','A coin decides who sends the next private signal. It can be a look, a sentence, a song, or a mutually agreed change of atmosphere.'],
    ['THE LOCKED DOOR','IV','Only what you both chose.','The door opens only to themes you both privately selected. Let one partner lead; the other may guide, swap, or pause at any moment.'],
    ['THE ALIBI','V','What happened stays yours.','Choose one detail of this night that you would like to remember, and one thing you would like to discover next time.']
  ];
  let round = 0;
  function render(){
    const c=chapters[round];
    $('#counter').textContent = 'ALIBI '+(round+1)+' / '+chapters.length;
    $('#kind').textContent=c[0]; $('#number').textContent=c[1];
    $('#title').textContent=c[2]; $('#prompt').textContent=c[3];
    $('#bar').style.width=((round+1)/chapters.length*100)+'%';
    $('#result').textContent='The game table is now part of the story. It will never introduce a theme you did not mutually unlock.';
  }
  const launch=$('#launch');
  if(!launch) return;
  launch.onclick=()=>{
    if(!(state.matches||[]).length) return alert('Both partners need at least one shared theme to open The Velvet Alibi.');
    round=0; render();
    document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='game'));
    scrollTo(0,0);
  };
  $('#next').onclick=()=>{ if(round===chapters.length-1){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='finish'));scrollTo(0,0)} else {round++;render()} };
  $('#deck').onclick=()=>$('#result').textContent='ALIBI CARD: '+['Leave one written clue.','Ask one question while staying in character.','Name one detail you noticed.','Offer a private compliment.'][Math.floor(Math.random()*4)];
  $('#wheel').onclick=()=>$('#result').textContent='ALIBI WHEEL: '+['Change the soundtrack.','Move to a new part of the room.','Slow the pace down.','Choose a shared mood.'][Math.floor(Math.random()*4)];
  $('#coin').onclick=()=>$('#result').textContent='ALIBI COIN: '+[state.aName||'Partner A',state.bName||'Partner B'][Math.floor(Math.random()*2)]+' directs the next scene.';
  $('#dice').onclick=()=>{const n=1+Math.floor(Math.random()*6);$('#result').textContent='ALIBI DICE: '+n+' — '+['Choose a song.','Share one secret wish for tonight.','Change one atmosphere detail.','Give a deliberate compliment.','Choose a shared theme.','Make one new private rule.'][n-1]};
})();
