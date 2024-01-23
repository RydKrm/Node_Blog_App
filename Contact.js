const  {Schema,model} = require("mongoose")

const contactSchema = new Schema({
    name:{
        type:String,
        required: true,
        trim:true,
        minLength:3,
        maxLength:50
    },
    email:{
        type:String,
        required: true,
        trim:true,
        minLength:3,
        maxLength:50
    },
    phone:{
        type:String,
       required: true,
        trim:true,
        minLength:3,
        maxLength:50
    }
})

const Contact = model('Contact',contactSchema)
module.exports = Contact