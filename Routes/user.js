const {Router} = require("express");
const userRouter = Router();


userRouter.post('/signup',function(req, res){
res.json({
    message : "you are signed up"
})
})

userRouter.post('/signin',function(req, res){
    res.json({
    message : "you are signed in"
})
})

userRouter.get('/purchases',function(req, res){
    res.json({
    message : "here are your purchases user"
})
})

module.exports = {
    userRouter:userRouter
}