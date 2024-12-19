var countDownDate = new Date("Oct 29, 2024 00:00:00").getTime();


var x = setInterval(function() {
    
    var now = new Date().getTime();

    
    var distance = countDownDate - now;

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;

    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Timer").innerHTML = "EXPIRED";
    }
}, 1000)

const musicButton = document.getElementById('musicButton');
const musicIcon = document.getElementById('musicIcon');
const backgroundMusic = document.getElementById('backgroundMusic');

let isPlaying = false;

musicButton.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicButton.classList.remove('active');
    } else {
        backgroundMusic.play();
        musicButton.classList.add('active');
    }
    isPlaying = !isPlaying;
});

window.addEventListener('load', () => {
    backgroundMusic.play().then(() => {
        console.log('Musik diputar otomatis');
    }).catch(error => {
        console.log('Autoplay tidak diizinkan oleh browser:', error);
    });
});

document.getElementById('bank-btn').addEventListener('click', function () {
    document.getElementById('bank-content').classList.add('active');
    document.getElementById('ewallet-content').classList.remove('active');
});

document.getElementById('ewallet-btn').addEventListener('click', function () {
    document.getElementById('ewallet-content').classList.add('active');
    document.getElementById('bank-content').classList.remove('active');
});

document.getElementById('copy-bank').addEventListener('click', function () {
    const tempInput = document.createElement('input');
    tempInput.value = ' 9875432908';  // Nomor rekening yang akan disalin
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Nomor rekening disalin ke clipboard!');
});

