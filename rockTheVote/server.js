const express = require ("express")
const app = express ()
const morgan = require ("morgan")
const mongoose = require ("mongoose")

//middleware 
app.use(express.json())
app.use(morgan('dev'))

//connect to db (can we call this db anything we like?)
mongoose.connect('mongodb://localhost:27017/rockthevotedb', {
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
    unCreateIndex:true, 
    useFindAndModify:false
}, 
()=> console.log ("connected to DB")
)

//routes (nodemon is not liking the userRouter)
app.use("/comment", require("./routes/commentRouter"))
// app.use("/user", require("./routes/userRouter"))
app.use("/issue", require("./routes/issueRouter"))

//error handling
app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})

//server listen
app.listen(9000,() => {
    console.log("Server is running on 9000")
} )