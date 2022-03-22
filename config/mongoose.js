const mongoose = require('mongoose');
// const uri = process.env.POLLING_URI;

// const db = mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to Atlas database ');
//   })
//   .catch((err) => {
//     console.error(`Error connecting to the database. \n${err}`);
//   });

mongoose.connect('mongodb://localhost/Polling_System_API_db');
//checking if connection is established
const db = mongoose.connection;
//if not connected to db
db.on('error', console.error.bind(console, 'ERROR CONNECTING TO DATABASE...'));
//if connected to db
db.once('open', () => {
  console.log('Successfully connected to Polling System Api database');
});
module.exports = db;
