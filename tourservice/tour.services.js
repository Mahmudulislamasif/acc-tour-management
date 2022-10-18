const Tour = require('../models/tour');
exports.getTourService=async()=>{
    const tours=await Tour.find({})
    return tours
}
exports.createTourServices=async(data)=>{

    const tour=await Tour.create(data)
    return tour
}
exports.getTourServiceByID=async(id)=>{
    const tours=await Tour.findById(id)
    return tours
}

