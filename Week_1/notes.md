Express review install
    npm init -y
    npm install --save express
(--save flag.so that you can automatically add the package you're installing as a dependency in package.json)

within App.js config the following  statements
const express = require ("express"); 
const app = express (); 
app.listen (PORT, () +>{
    console.log (This app is running on ${PORT})
}); 

Install nodemon  
npm install nodemon -g
--------------------------
connecting to mongoose and connecting react. 
install both express and morgan

then install mongo
inside the project folder 

 in terminal
     npm install --save mongoose

in the server.js 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviesdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)
