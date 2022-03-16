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
    const messageBoxType = userName === message.author ? 'own-message-box' : 'foreign-message-box';
    msgBox.classList.add(messageBoxType);
    const msg = document.createElement('div');
    msg.classList.add('message');
    const messageType = userName === message.author ? 'own-message' : 'foreign-message';
    msg.classList.add(messageType)
    const msgText = document.createElement('div');
    msgText.classList.add('message-text');
    msgText.innerHTML = message.text;
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    const avatarType = userName === message.author ? 'own-avatar' : 'foreign-avatar';
    avatar.classList.add(avatarType);
    avatar.innerHTML = message.author.toUpperCase()[0];
    const authorPopover = document.createElement('div');
    authorPopover.classList.add('popover');
    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popover-title');
    popoverTitle.innerHTML = message.author;
    authorPopover.append(popoverTitle);
    const popoverContent = document.createElement('div');
    popoverContent.classList.add('popover-content');
    const btnPrivateMsg = document.createElement('div');
    btnPrivateMsg.classList.add('button');
    btnPrivateMsg.innerHTML = 'Private Chat';
    popoverContent.append(btnPrivateMsg);
    authorPopover.append(popoverContent);
    avatar.append(authorPopover);
    msg.append(msgText);
    msg.prepend(avatar);
    msgBox.append(msg);
    messages.append(msgBox);
    messages.scrollTop = messages.scrollHeight;
}