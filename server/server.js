const express = require('express');
const serverRoutes = require('./routes');

const app = express();

app.use(serverRoutes);

module.exports = app;