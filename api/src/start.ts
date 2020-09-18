const mongoose = require('mongoose');
// import environmental variables from our variables.env file
// require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect("mongodb://localhost:27017/acnh", { useNewUrlParser: true, useUnifiedTopology: true });
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
app.set('port', process.env.PORT || 5555);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});