'use strict';

require('dotenv').config();
const { db } = require('./src/auth/models/index');
const {start} = require('./src/server');
const PORT = process.env.PORT ;

db.sync().then(() => {
  start(PORT);
}).catch(err=>console.log(err))
