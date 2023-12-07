const dataModel = require("../model/data");

exports.getAllData= async () => {
  return await dataModel.find();
};

exports.createMultipleData = async(dataArr) =>{
  dataArr.forEach(element => {
     dataModel.create(element)
  })
  return await this.getAllData()
}
exports.createData = async (data) => {
  return await dataModel.create(data);
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
