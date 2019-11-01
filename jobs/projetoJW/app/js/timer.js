const moment = require('moment');
let seconds;
let timer;

module.exports = {

    start(elemento) {
        let tempo = moment.duration(elemento.textContent);
        seconds = tempo.asSeconds();

        clearInterval(timer);
        timer = setInterval(() => {
            seconds++

            elemento.textContent = this.secondsParaTempo(seconds);
        }, 1000);
    },
    secondsParaTempo(seconds) {
        return moment().startOf('day').seconds(seconds).format("HH:mm:ss");
    },

    stop() {
        clearInterval(timer);
    },

    restart(elemento) {
        clearInterval(timer);
        elemento.textContent = '00:00:00';
    }
}