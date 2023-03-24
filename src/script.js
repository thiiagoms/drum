function playSound(soundElement) {
    document.querySelector(soundElement).play();
}

const audioList = document.querySelectorAll('.tecla');

audioList.forEach((soundButton) => {
    
    soundButton.onclick = function() {
        soundButton.classList.add('ativa');
        playSound(`#som_${soundButton.classList[1]}`);
        soundButton.classList.remove('ativa');
    };

    soundButton.onkeydown = function(event) {
        if (event.code == 'Space' || event.code == 'Enter') {
            soundButton.classList.add('ativa');
        }
    }

    soundButton.onkeyup = function () {
        soundButton.classList.remove('ativa');
    }
})