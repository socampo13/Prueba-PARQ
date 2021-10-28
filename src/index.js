const express = require('express');
const consign = require('consign');
const path = require('path');

const app = express();
const __dirname = path.resolve();

consign({ cwd: path.join(__dirname, 'src') })
    .include('libs/config.js')
    .then('database.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);