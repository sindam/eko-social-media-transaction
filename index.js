'use strict'

const express=require('express')
const request=require('request')
const bodyParser=require('body-parser')

const app=express()

app.set('port',(process.env.PORT || 5000))
//Allows to process data
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//ROUTES
app.get('/',function(req,res){
  res.send("Hi i am a chatbot")
});

app.get('/webhook/',function(req,res){
  if(req.query['hub.verify_token']==='fb-chat-bot'){
     res.send(req.query['hub.challenge'])
   }
  res.send("Wrong token");
})
app.listen(app.get('port'),function(){
    console.log("running:port ")
})
