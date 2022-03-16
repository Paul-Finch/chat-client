const server = "127.0.0.1";
const port = "8353";
const connection = new WebSocket(`ws://${server}:${port}`);

addMessage({
  author: botName,
  text: "Connecting to the chatroom...",
});

connection.onopen = function () {
  addMessage({
    author: botName,
    text: "Connected. Welcome to this channel!",
  });
  if (!userName) {
    addMessage({
      author: botName,
      text: "You have not yet set your user name. Please enter your name.",
    });
    input.placeholder = "Enter your name...";
    input.disabled = false;
    input.focus();
  }
};

connection.onerror = function (error) {
  addMessage({
    author: botName,
    text: "An error occured while connecting to the chatserver. Please try again later.",
  });
  input.disabled = true;
};

connection.onmessage = function (message) {
  try {
    input.disabled = false;
    const json = JSON.parse(message.data);
    if (json.type === "history") {
      addMessage({
        author: botName,
        text: 'Chat history has been loaded...'
      });
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
