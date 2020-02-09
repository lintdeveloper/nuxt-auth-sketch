const express = require('express'),
      helmet = require('helmet'),
      bodyParser = require('body-parser'),
      apiRoutes = require('./routes/index'),
      config = require('./config/config'),
      mongoose = require('./db/mongoose'),
      cors = require('cors'),
      dotenv = require("dotenv");
      app = express();

dotenv.config();
const port = process.env.PORT;
app.use(helmet())
    .disable('x-poweredBy')
    .use(cors())
    .use(bodyParser.json({limit: "1mb"}))
    .use(bodyParser.urlencoded({extended: false}))

app.use('/api/v1/', apiRoutes);

app.get('/', (req, res) => {
    res.send({"api": "v1.0.0"})
});

app.listen(port, ()=> {
    console.log(`Server started on ${port}`);
})