const form = document.querySelector('form');
const name = form.querySelector('div #name');
const email = form.querySelector('div #email');
const password = form.querySelector('div #password');



form.addEventListener("submit", formhandler);

function formhandler(e) {
    e.preventDefault();
    console.log("submit");
