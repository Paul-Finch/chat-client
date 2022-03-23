/*
    Chat Formular
    - Handle formular components and events
*/

const form = document.getElementById('input-box');
form.addEventListener('submit', onSubmit);
const subButton = document.getElementById('button-submit');
subButton.addEventListener('click', onSubmit);
const input = document.getElementById('input');

// fires on any formular submition

function onSubmit(event){
    event.preventDefault();
    const text = input.value;
    if(text){
        connection.send(text);
        input.disabled = true;
        if(!userName){
            userName = text;
            //localStorage.setItem('user', userName);
            input.placeholder = 'Enter your message...';
        }
    }
    input.value = '';
    return false;
}