const express = require('express');
const port = 8000;
const cors = require('cors');
const app = express();
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));
//using  cors
app.use(cors());
app.use('/', require('./routes/index'));
//starting server
app.listen(port, (err) => {
  if (err) {
    console.log('Error Occured while connecting to Server');
    return;
  }
  console.log(`Successfully connected to Server at Port ${port}`);
});

