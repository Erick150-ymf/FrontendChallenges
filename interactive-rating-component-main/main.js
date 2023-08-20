// buttons
const li1 = document.querySelector('.liBtn1');
const li2 = document.querySelector('.liBtn2');
const li3 = document.querySelector('.liBtn3');
const li4 = document.querySelector('.liBtn4');
const li5 = document.querySelector('.liBtn5');
const butn = document.querySelector('button');

// span dinamic
const targetSelect = document.querySelector('.firtselect');
const targetFinal = document.querySelector('.secondselect');
const span = document.getElementById('dinamic_span');

// Buttons selects dinamics colors

function removeColor() {
    li1.classList.remove('liColor');
    li2.classList.remove('liColor');
    li3.classList.remove('liColor');
    li4.classList.remove('liColor');
    li5.classList.remove('liColor');
}

li1.addEventListener('click', changeColor => {
    removeColor();
    li1.classList.toggle('liColor');
});
li2.addEventListener('click', changeColor => {
    removeColor();
    li2.classList.toggle('liColor');
});
li3.addEventListener('click', changeColor => {
    removeColor();
    li3.classList.toggle('liColor');
});
li4.addEventListener('click', changeColor => {
    removeColor();
    li4.classList.toggle('liColor');
});
li5.addEventListener('click', changeColor => {
    removeColor();
    li5.classList.toggle('liColor');
});

const lista = [];


butn.addEventListener('click', a => {
    const selectedLi = document.querySelector('.liColor');
    if (selectedLi) {
        lista.push(selectedLi.textContent);
        span.textContent=selectedLi.textContent;
        targetSelect.style.display = 'none';
        targetFinal.style.display='block';
    }else {
        alert('Selecciona uno de los 5 números');
    }
});
