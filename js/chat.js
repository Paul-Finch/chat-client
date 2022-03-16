let userName = localStorage.getItem('user');
const botName = 'Chat-Bot';

const form = document.getElementById('input-box');
form.addEventListener('submit', onSubmit);
const subButton = document.getElementById('button-submit');
subButton.addEventListener('click', onSubmit);
const input = document.getElementById('input');

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

function addMessage(message){
    const messages = document.getElementById('messages');
    const msgBox = document.createElement('div');
    msgBox.classList.add('message-box');
    const messageType = userName === message.author ? 'own-message' : 'foreign-message';
    msgBox.classList.add(messageType)
    const msg = document.createElement('div');
    msg.classList.add('message');
    msg.innerHTML = message.text;
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.innerHTML = message.author.toUpperCase()[0];
    msg.prepend(avatar);
    msgBox.append(msg);
    messages.append(msgBox);
    messages.scrollTop = messages.scrollHeight;
}