let clock = document.querySelector('.clock');

setInterval(() => {
    clock.innerHTML = `${addZero((new Date).getHours())}:${addZero((new Date).getMinutes())}:${addZero((new Date).getSeconds())}`;
}, 1000);

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}