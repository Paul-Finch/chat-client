/*
    Messages
    - Handles incoming messages
*/

function addMessage(message){
    console.log('userName', userName, 'message.author', message.author);
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

    btnPrivateMsg.addEventListener("click", () => {
        let url = new URL(window.location.toString().replace('index.html', 'private-chat.html'));
        url.searchParams.append('client', userName);
        url.searchParams.append('receiver', message.author)
        window.open(url);
    })
}