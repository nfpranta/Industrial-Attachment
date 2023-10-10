const mongoose=require('mongoose')

const quoteSchema=mongoose.Schema({
    sentence:{
        type:String,
        required:[true,'The maximum length is 10'],
        maxlength:200,
        unique:true
    },
    character:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Quote",quoteSchema)