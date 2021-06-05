const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment_id:{
        type: String, 
        required: true
    }, 
    body:{
        type:String, 
        required: true
    }, 
    author:{
        type:Schema.Types.ObjectId, 
        ref:'User', 
        required: true
    }, 
    relatedIssue:{
        type: Schema.Types.ObjectId, 
        ref:"Issue", 
        required:true
    }

})
module.exports = mongoose.model("Comment", commentSchema)