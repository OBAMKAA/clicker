let clicks = 0

const display = document.querySelector('#display')
const button = document.querySelector('#button')
const couter = document.querySelector('#counter')

const secFive = document.querySelector('#secFive')
const secTen = document.querySelector('#secTen')
const secFifteen = document.querySelector('#secFifteen')

button.onclick = start;

secFive.onclick = upSecFive;
secTen.onclick = upSecTen;
secFifteen.onclick = upSecFifteen;

function start() {

    const startTime = Date.now();
  
    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'stop';   


        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT)
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2)
}

function upSecFive() {
    const TIMEOUT = 5000
    const startTime = Date.now();
  
    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'stop';   


        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT)
}

function upSecTen() {
    const TIMEOUT = 10000
    const startTime = Date.now();
  
    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'stop';   


        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT)
}

function upSecFifteen() {
    const TIMEOUT = 15000
    const startTime = Date.now();
  
    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'stop';   


        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT)
}

// const user = document.getElementById('user');
// const username = user.elements.username.value;
// if (display == stop) {
// localStorage.setItem('username', username, counter);
// }
// const userName = document.getElementById('userName');
// if (display == stop) {
//     console.log(localStorage.getItem(userName)) 
// }
