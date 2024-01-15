const dataModel = require("../model/data");


exports.getAllData= async (params) => {
  let matchData = {}
  if(params.country){
    matchData.country = params.country
  }
  if(params.pestle){
    matchData.pestle = params.pestle
  }
  if(params.region){
    matchData.region = params.region
  }
  if(params.topics){
    matchData.topics = params.topics
  }
  if(params.sector){
    matchData.sector = params.sector
  }
  if(params.source){
    matchData.source = params.source
  }
  if(params.end_year){
    matchData.end_year = params.end_year
  }
  
  return await dataModel.aggregate([{$match:matchData}]);
};

exports.createMultipleData = async(dataArr) =>{
  
  dataArr.forEach(element => {
    dataModel.create(element)
  })
  return await this.getAllData()
}
exports.createData = async (data) => {
  return await dataModel.create(data)
};
exports.getDataById = async (id) => {
  return await dataModel.findById(id);
};

exports.updateData = async (id, data) => {
  return await dataModel.findByIdAndUpdate(id, data);
};

exports.deleteData = async (id) => {
  return await dataModel.findByIdAndDelete(id);
};

exports.getCountriesIntensity= async()=>{
  return await dataModel.aggregate([{$group:{_id:"$country", intensity:{$avg:"$intensity"}}}]);
};

exports.getAllSourceDetails= async()=>{
  return await dataModel.aggregate([{$group:{_id:"$source", totalSourceCount:{$count:{}}}}]);
};