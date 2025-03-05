document.addEventListener('DOMContentLoaded', function() { 
    const errorMessage = document.getElementById('errorMessage'); 
    const retryButton = document.getElementById('retryButton'); 
    const soundPlaying = document.getElementById('soundPlaying'); 
    const sound = document.getElementById('funSound'); 
    const telegramLink = document.getElementById('telegramLink'); 
    sound.volume = 0.1; 
    function playSound() { 
        sound.play() 
        .then(() => { 
            errorMessage.style.display = 'none'; 
            soundPlaying.style.display = 'flex'; 
            sound.volume = 1.0; 
            }) 
        .catch((e) => { 
            console.error('Ошибка воспроизведения звука:', e); 
            alert('Разрешите воспроизведение звука и попробуйте снова.') 
            });
        } 
    retryButton.addEventListener('click', playSound); 
    document.body.addEventListener('click', playSound, { once: true }); 
    telegramLink.addEventListener('click', function(event) { event.stopPropagation(); });
});
