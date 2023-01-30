const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const app = express();
const routes = require('./routes/routes');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


// databse connection
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/CineMax",
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    },
    function checkDatabase(err)
    {
        if(err)
        {
            console.log("ERROR: Database not Connected....!!")
        }
        else
        {
            console.log("Database Connected....!!")
        }
    });


const corsOptions = {
    origin: "http://localhost:4200",
    Credential: true,
    optionsSuccessStatus: 200
}


// cors
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);


// body-parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);


// create port
// const port = process.env.PORT || 3000
// app.listen(port, () => 
// {
//     console.log('Connected to port ' + port)
// });

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('hello!'));
  http.listen(3000, () => {
  // console.log('listening on *:3000');
  console.log('Connected to port ' + port)
});


// chat 
io.on('connection', (socket) => {  
  // console.log('a user connected'); 
  socket.on('message', (msg) => {
    // console.log(msg);
    socket.broadcast.emit('message-broadcast', msg);
   });
});