const button1 = document.querySelector('.click');
const button2 = document.querySelector('.reset');

let elm = document.querySelector('.select')
let count = elm.textContent

function handleClick() {
    count = +count
    elm.textContent = count += 1;
}

function handleReset() {
    count = 0
    elm.textContent = 0;
}

button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleReset);