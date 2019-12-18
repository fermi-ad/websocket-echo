# Websocket Echo

A simple demonstration of WebSockets. The websocket server simply echoes messages sent from clients. The client in this case is a browser.

## Installation

Download source from GitHub.

```bash
git clone https://github.com/fermi-controls/websocket-echo.git
```

npm and our server our dependent on [NodeJS](https://nodejs.org/). NodeJS comes with npm.

Use the package manager [npm](https://www.npmjs.com/) to install the client and server.

```bash
cd client
npm install
cd ../server
npm install
```

## Usage

We are running two separate applications so we open two terminals, one for each process.

Terminal 1:

```bash
cd client
npm start
```

Terminal 2:

```bash
cd server
npm start
```
