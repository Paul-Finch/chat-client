/*
    Configuration
    - Edit settings for client here
*/

// Server connection settings

const server = "127.0.0.1";
const port = "8354";

// Chat client settings
const receiver = new URL(window.location.toString()).searchParams.get('receiver');
const client = new URL(window.location.toString()).searchParams.get('client');
let userName = client;
const botName = 'Chat-Bot'; // Chat-Bot username