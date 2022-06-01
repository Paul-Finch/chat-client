/*
    Chat-Bot
    - Interacts with the user via chat messages
*/

const ChatBot = function(){

    this.addMessage = function(text){
        addMessage({
            author: botName,
            text: text,
        });
    }

    this.connectionMessage = function(){
        this.addMessage("Connecting to the chatroom...");
    }

    this.welcomeMessage = function(){
        this.addMessage("Connected. Welcome to this channel!");
    }

    this.privateConnectionMessage = function(){
        this.addMessage("Connecting to the private chatroom...");
    }

    this.privateWelcomeMessage = function(receiver){
        this.addMessage(`Connected. Welcome to the private chat with ${receiver}!`);
    }

    this.enterNameMessage = function(){
        this.addMessage("You have not yet set your user name. Please enter your name.");
    }

    this.connectionErrorMessage = function(){
        this.addMessage("An error occured while connecting to the chatserver. Please try again later.");
    }

    this.chatHistoryLoadedMessage = function(){
        this.addMessage("Chat history has been loaded...");
    }

};

const chatBot = new ChatBot();