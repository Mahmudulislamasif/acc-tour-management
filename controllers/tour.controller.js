const Tour = require('../models/tour');
const { getTourService, createTourServices, getTourServiceByID } = require('../tourservice/tour.services');

exports.getTour=async(req,res,next)=>{
    try
    {
     
      const tours=await getTourService()
      res.status(200).json({
        status:"successfully get data from database",
        messege:"Data get successfully",
        data:tours
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail to get data',
        messege:'Data is not available',
        error:error.messege
       })
    }
   
  }
  exports.getTourByID=async(req,res,next)=>{
    try
    {
      const {id}=req.params
      const tours=await getTourServiceByID(id)
      res.status(200).json({
        status:"successfully get data from database",
        messege:"Data get successfully",
        data:tours
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail to get data',
        messege:'Data is not available',
        error:error.messege
       })
    }
   
  }
   exports.getTourByID=async(req,res,next)=>{
    try
    {
      const {id}=req.params
      const tours=await getTourServiceByID(id)
      res.status(200).json({
        status:"successfully get data from database",
        messege:"Data get successfully",
        data:tours
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail to get data',
        messege:'Data is not available',
        error:error.messege
       })
    }
   
  }
  exports.createTours=async(req,res,next)=>{
    try
    {
      const result= await createTourServices(req.body)

     
      res.status(200).json({
        status:"success",
        messege:"Data inserted",
        data:result
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail',
        messege:'Data is not inserted',
        error:error.messege
       })
    }
   
  }
