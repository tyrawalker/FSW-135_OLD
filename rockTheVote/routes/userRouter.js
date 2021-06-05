const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

//Get All
userRouter.get('/', (req, res, next) => {
    User.find((err, items) =>{
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send(items)
    })
})

//Get One
userRouter.get("/:user_ID", (req, res, next) =>{
    const user_ID = req.params.user_ID
    const foundItem = items.find(item => item._id === user_ID)
    if(!foundItem){
        const error = new Error(`This item cannot be found.`)
        res.status(500)
        return next (error)
    }
    return res.status(200).send(foundItem)
})

//Post One
userRouter.post('/', (req, res, next)=>{
    const newItem = new Item (req.body)
    newItem.save((err, saveItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(saveItem)
    })
})


//Delete One
userRouter.delete("/:user_ID", (req, res, next) => {
    User.findOneAndDelete({_id: req.params.user_ID}, (err, deleteItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item from the Database`)
    })
})

//update one 
userRouter.put("/:user_ID", (req, res, next) =>{
    User.findOneAndUpdate(
        {_id: req.params.user_ID}, 
         req.body, 
         {new:true}, 
         (err, updatedItem) =>{
            if (err){
                res.status (500)
             return next (err)
            }
            return res.status(201).send(updatedItem)
        }
)
})

module.exports=  userRouter; 