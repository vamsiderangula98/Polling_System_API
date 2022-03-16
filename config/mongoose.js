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

 mongoose.connect('mongodb://localhost/polling_api_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR CONNECTING TO DATABASE...'));
db.once('open', () => {
  console.log('Successfully connected to Polling Api database');
});
module.exports = db;
