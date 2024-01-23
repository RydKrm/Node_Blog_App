const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express()
app.set('view engine','ejs') 
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 

const port = process.env.port || 8080
/*
let Schema = mongoose.Schema
let testSchema = new Schema({
    name:String
}) 

let Test = mongoose.model('Test',testSchema)

app.get('/',(req,res) =>{
    let test = new Test({
        name: 'Riyad'
    })
   test.save()
   .then(t=>{
       res.json(t)
   })
   .catch(e=>{
       console.log(e)
       res.status(500).json({
           error:'Error Occurred'
       })
   })

  })  
  */ 

  app.use('/contacts',router)

  app.get('/',(req,res)=>{
    res.send('<h1>This is testing </h1>')

  }) 

  app.post('/',(req,res)=>{
   console.log('Something ');
    console.log(req.body);

  })
  
 mongoose.connect('mongodb://localhost:27017/',{useNewUrlParser:true})
  .then(()=>{
      app.listen(port,()=>{
          console.log('Server is running on port '+ port)
      })
  }).catch(e=>{
      console.log(e)
  })



