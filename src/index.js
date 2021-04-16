'use strict';

const http = require('http');
const { PORT } = require('./utils/config');
const { app } = require('./app');
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
