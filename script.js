let dias = document.querySelector('.days');
let horas = document.querySelector('.hours');
let minutos = document.querySelector('.minutes');
let segundos = document.querySelector('.seconds');

let greysTimeStamp = new Date(2022, 09, 06, 21)

function greysCountdown () {
    let todayTimeStamp = new Date();
    let greysTimeStamp = new Date(2022, 09, 06, 21);

    let diference = greysTimeStamp.getTime() - todayTimeStamp.getTime();

    dias.innerHTML = `${Math.floor(diference / (1000 * 60 * 60 * 24))}:`;
    horas.innerHTML = `${Math.floor((diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}:`;
    minutos.innerHTML = `${Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60))}:`;
    segundosCountdown = Math.floor((diference % (1000 * 60)) / 1000);
    segundos.innerHTML = `${(segundosCountdown > 9 ? segundosCountdown : `0${segundosCountdown}`)}`;

  if (todayTimeStamp > greysTimeStamp) {
    let newSeasonCall = document.querySelector('.novaTemporada');
    let divCountdown = document.querySelector('.time');
    newSeasonCall.classList.add('displayRemove');
    divCountdown.classList.add('displayRemove');
    document.getElementById("demo").innerHTML = `A <span class="temporada">Temporada 19</span> já começou! Divirta-se!`;
  }
};

setInterval(greysCountdown, 1000)
