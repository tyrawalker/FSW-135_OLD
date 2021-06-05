const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    issue_id: {
        type:String, 
        required: true
    }, 
    title:{
        type: String, 
        required: true
    }, 
    body:{
        type: String, 
        required: true
    }, 
    author:{
        type:Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }
    //need comment section, that points to issue and user
})

module.exports = mongoose.model("Issue", issueSchema)