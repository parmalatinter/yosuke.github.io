'use strict'

const getPassFromHash = () =>{
    return 'password';
}

const PASSWORD_HASH = 'xxxxxxxxxxx';
const KEY = 'password';
const MESSAGE = 'Please input password';

let password = sessionStorage.getItem(KEY);

if (password === null) {
    password = window.prompt(MESSAGE);
    sessionStorage.setItem(KEY, password);
}
if (password != getPassFromHash()) {
    window.location.href = "/yosuke.github.io";
}
