const Contact = require('./Contact')

exports.getAllContact = (req,res) => {
  Contact.find().then(contacts=>{
    res.render('index',{contacts,error:{}})
  }).catch(e=>{
      console.log(e)
      res.json({
          message:'error Occurred'
      })
  })

} 

exports.getSingleContact = (req,res) => {
  let {id} = req.params
  Contact.findById(id).then(contact=>{
      res.json(contact)
  }).catch(e=>{
      console.log(e);
      res.json({
        message:'Error Occurred'
      })
  })

}

exports.createContact = (req,res) => {
 
 //console.log(req.body)

  let {name,email,phone,id} = req.body
 console.log(req.body)

 let error = {}

 if(!name) error.name = 'Please enter a name'
 if(!phone) error.phone = 'Please enter phone number'
 if(!email) error.email = 'please enter Email' 

 let isError = Object.keys(error).length>0 

 if(isError){
   Contact.find().then(contacts=>{
    return res.render('index',{contacts,error:{}})
    }) .catch(e=>{
      console.log(e);  
     return res.json({
         message: 'Error Occurred' 
      })
  })
 } 

 if(id){
  Contact.findOneAndUpdate(
    {_id:id},
    {$set:{name,email,phone}}
    ). then(()=>{
      Contact.find()
      .then(contacts=>{
        res.render('index',{contacts,error:{}})
      })
    }).catch(e=>{
      console.log(e)
      return res.json({
        message: 'Error Occurred'
      })
    })
 } else { 

  let contact = new Contact({
      name,email,phone
  }) 


  contact.save()
  .then(c=>{
    Contact.find()
    .then(contacts=>{
      return res.render('index',{contacts,error:{}})
      }) 
    })
      .catch(e=>{
        console.log(e);  
       return res.json({
           message: 'Error Occurred' 
        })
    })
  }
}



exports.updateContact= (req,res) => {
  let {name,email,phone} = req.body
  let {id} = req.params
  Contact.findOneAndUpdate(
      {_id:id},
      {$set:{name,email,phone}},
      {new:true}
      ).then(con=>{
          res.json(con)
      }).catch(e=>{
        console.log(e)
        res.json({
         message:'Error Occurred'
        })
      })

      // for update contact  



}

exports.deleteContact = (req,res) => {
    let {id} = req.params
  Contact.findOneAndDelete(
      {_id:id}
      ).then(contacts=>{
         Contact.find()
         .then(contacts=>{
           res.render('index',{contacts,error:{}})
         })
      }).catch(e=>{
        console.log(e)
        res.json({
         message:'Error Occurred'
        }) 
      })


}