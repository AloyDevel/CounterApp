const valueCounter = document.querySelector('#valueCounter');
const btnDecrease = document.querySelector('#btnDecrease');
const btnReset = document.querySelector('#btnReset');
const btnIncrease = document.querySelector('#btnIncrease');
const btns = document.querySelectorAll('.btn');

let counter = 0;

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const content = e.currentTarget.textContent;
        console.log(content);

        if (content == 'Decrease') {
            counter--
            valueCounter.innerHTML = counter
        } else if (content == 'Reset') {
            counter = 0
            valueCounter.innerHTML = counter
        } else if (content == 'Increase') {
            counter++
            valueCounter.innerHTML = counter
        }

    })
});

btnDecrease.addEventListener('click', () => {
    console.log('hola')
})