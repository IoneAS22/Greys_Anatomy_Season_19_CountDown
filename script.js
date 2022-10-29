let dias = document.querySelector('.days');
let horas = document.querySelector('.hours');
let minutos = document.querySelector('.minutes');
let segundos = document.querySelector('.seconds');

let todayTimeStamp = new Date().getTime();
let greysTimeStamp = new Date(2022, 09, 06, 21).getTime();
let diference = greysTimeStamp - todayTimeStamp;

function greysCountdown () {

    let todayTimeStamp = new Date().getTime();
    let greysTimeStamp = new Date(2022, 09, 06, 21).getTime();

    let diference = greysTimeStamp - todayTimeStamp;

    dias.innerHTML = `${Math.floor(diference / (1000 * 60 * 60 * 24))}:`;
    horas.innerHTML = `${Math.floor((diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}:`;
    minutos.innerHTML = `${Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60))}:`;
    segundosCountdown = Math.floor((diference % (1000 * 60)) / 1000);
    segundos.innerHTML = `${(segundosCountdown > 9 ? segundosCountdown : `0${segundosCountdown}`)}`;

  if (diference < 0) {
    let timer = document.querySelector('.time');
    timer.classList.add('removeTime');
    document.getElementById("demo").innerHTML = "The New Season Has Already Started. Enjoy!";
  };

};

setInterval(greysCountdown, 1000)
