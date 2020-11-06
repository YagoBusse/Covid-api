const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const axios = require('axios');
const requireDir = require('require-dir');
const novelcovid = require('novelcovid'); 
const router = require('./src/routes');
const database = require('./src/database/index');

database().then(
    requireDir('./src/models/'),
    app.use(cors()),
    app.use(express.json()),
    app.use(router),
    app.listen('3002')
    ).catch(console.log);




