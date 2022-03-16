const express = require('express');
const port = 8000;
const cors = require('cors');
const app = express();
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));
//use cors
app.use(cors());
app.use('/', require('./routes/index'));
//start server
app.listen(port, (err) => {
  if (err) {
    console.log('Error Occured while connecting to Server');
    return;
  }
  console.log(`Successfully connected to server at Port ${port}`);
});

