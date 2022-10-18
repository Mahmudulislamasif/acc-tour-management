const mongoose = require('mongoose');
//schema design
const tourSchema=mongoose.Schema({
    name:{
      type:String,
      required:[true,"Please provide a place name for tour"],
      trim:true,
      unique:[true,"Name must be unique"],
      minLength:[6,"Name must be at least 3 characters"],
      maxLength:[50,"Name is too large"]
    },
    description:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true,
      min:[0,"Price can't be negative"],
    },
   
   
    
  },{
    timstamps:true,
  })
  
  const Tour=mongoose.model('Tour',tourSchema)

  module.exports=Tour;