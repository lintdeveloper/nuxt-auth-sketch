// modules
const config = require("../config/config"),
      dotenv = require("dotenv"),
      mongoose =  require('mongoose');

dotenv.config();

// variables
const uri = process.env.DB_URI_DEV,
      conn = mongoose.connection;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

//global functions
mongoose.Promise = global.Promise;
mongoose.connect(uri, options);

// error in db connection
conn.on('error', console.error.bind(console, 'connection error:'))
.catch(err => console.log(err));

conn.once('open', () => {
    console.log('connected to a database')
});


module.exports = mongoose;