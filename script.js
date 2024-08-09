document.body.addEventListener('keyup', (event) => { // evento de click na tela inteira
  playSound(event.code.toLowerCase() );
}); // todo corpo do documento com um evento que espera (quando a tecla for pressionada )

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
     

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);

  //mostrando oque está tocando
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(()=> {
        keyElement.classList.remove('active')
    }, 300); // espere 300 milissegundos e depois remova

  }
}


function playComposition(songArray) {
    let wait = 0;


    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait);

        wait += 250;

           
    }
}