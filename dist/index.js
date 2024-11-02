"use strict";
function insert(num) {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML += num.toString();
    }
}
function clean() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = '';
    }
}
function back() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = resultElement.innerHTML.substring(0, resultElement.innerHTML.length - 1);
    }
}
function calc() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = eval(resultElement.innerHTML);
    }
}
