const WebSocket = require('ws');

const port = 8085;
const wss = new WebSocket.Server({ port });

wss.on('connection', connection => {
    connection.on('message', message => {
        connection.send(`SERVER: ${message}`);
    });

    connection.on('close', (code, reason) => {
        console.log(`SERVER: CONNECTION CLOSED${reason ? '\n\t' + reason : ''} (${code})`);
    });

    connection.send('SERVER: CONNECTED');
});

console.log(`Server listening at ${port}`);