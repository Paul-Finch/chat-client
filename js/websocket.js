/*
  Websocket
  - Establishes and controls server connection
*/

const connection = new WebSocket(`ws://${server}:${port}`);

chatBot.connectionMessage();

// Event fires on connection open
connection.onopen = function () {
  chatBot.welcomeMessage();
  if (!userName) {
    chatBot.enterNameMessage();
    input.placeholder = "Enter your name...";
    input.disabled = false;
    input.focus();
  }
};

// Event fires on connection error
connection.onerror = function (error) {
  chatBot.connectionErrorMessage();
  input.disabled = true;
};

// Event fires on connection message received
connection.onmessage = function (message) {
  try {
    input.disabled = false;
    const json = JSON.parse(message.data);
    if (json.type === "history") {
      chatBot.chatHistoryLoadedMessage();
      for (let i = 0; i < json.data.length; i++) {
        const message = json.data[i];
        addMessage(message);
      }
    } else if (json.type === "message") {
      //input.removeAttr('disabled');
      const message = json.data;
      addMessage(message);
    } else {
      console.log("Invalid JSON received: ", json);
    }
    input.focus();
  } catch (e) {
    console.log("Invalid data received: ", message.data);
    return;
  }
};
