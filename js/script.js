window.addEventListener('keydown', e =>{
    const div = document.querySelector(`.button[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();

    div.classList.add('playing');

});


const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('transitionend', removePlayingClass));

function removePlayingClass(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}