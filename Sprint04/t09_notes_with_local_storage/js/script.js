const clickClearLocalStorage = document.querySelector('#clear');
const clickAddLocalStorage = document.querySelector('#add');
const outputLocalStorage = document.querySelector('#output');
let item = 0;

clickAddLocalStorage.addEventListener('click', addToLocalStorage);
clickClearLocalStorage.addEventListener('click', clearLocalStorage);

if (localStorage.length === 0) {
    outputLocalStorage.innerHTML = '[Empty]';
} else {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.getItem(localStorage.key(i));
        if (i === 0) {
            outputLocalStorage.innerHTML = `--> ${key}`;
        } else {
            outputLocalStorage.innerHTML += `<div>--> ${key}</div>`;
        }
    }
}

function addToLocalStorage() {
  let date = new Date;
  const date3 = ` [${date.getDate()<10?("0" + date.getDate()):date.getDate()}.${date.getMonth()<10?("0" + date.getMonth()):date.getMonth()}.${date.getFullYear()}, ${date.getHours()<10?("0" + date.getHours()):date.getHours()}:${date.getMinutes()<10?("0" + date.getMinutes()):date.getMinutes()}:${date.getSeconds()<10?("0" + date.getSeconds()):date.getSeconds()}]`;
    const textareaValue = document.querySelector('#textarea').value;
    if (textareaValue === "") {
        alert('It\'s empty. Try to input something in "Text input"');
    } else {
        localStorage.setItem(item.toString(), textareaValue + date3);
        if (outputLocalStorage.innerHTML === '[Empty]') {
            outputLocalStorage.innerHTML = '';
            outputLocalStorage.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(item.toString())}</div>`);
        } else {
            outputLocalStorage.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(item.toString())}</div>`);
        }
        item++;
    }
    clearInput();
}

function clearLocalStorage() {
    const question = confirm('Are you sure?');
    if (question === true) {
        localStorage.clear();
        outputLocalStorage.innerHTML = '[Empty]';
    }
    clearInput();
}

function clearInput() {
  document.getElementById("textarea").value = "";
}
