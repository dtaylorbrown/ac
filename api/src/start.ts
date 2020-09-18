const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your port is ${process.env.PORT}`);
console.log(`Your db is ${process.env.DB_URI}`);

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('connected', () => {
  console.log(`Connection to ${mongoose.connection.name} successful`)
});
mongoose.connection.on('error', (err: { message: String; }) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 → ${err.message}`);
});

// import all of our models
require('./models/Bug');
require('./models/Fish');

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 6666);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});