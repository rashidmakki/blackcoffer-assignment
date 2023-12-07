const dataService = require("../service/dataService");
const moment = require("moment");

exports.getAllData = async (req, res) => {
  try {
    const datas = await dataService.getAllData();
    // console.log(datas)
    const updatedDatas = datas.map((d)=> ({ ...d._doc,added:moment(d.added).format('MMM, DD YYYY HH:mm:ss'),published:moment(d.published).format('MMM, DD YYYY HH:mm:ss')}))
    res.json({ data: updatedDatas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMultipleData = async (req, res) => {
  try {
    const data = await dataService.createMultipleData(req.body);
    const updatedDatas = data.map((d)=> ({ ...d._doc,added:moment(d.added).format('MMM, DD YYYY HH:mm:ss'),published:moment(d.published).format('MMM, DD YYYY HH:mm:ss')}))
    res.json({ data: updatedDatas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createData = async (req, res) => {
  try {
    const data = await dataService.createData(req.body);
    res.json({ data: {...data._doc,added:moment(data.added).format('MMM, DD YYYY HH:mm:ss'),published:moment(data.published).format('MMM, DD YYYY HH:mm:ss')}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataById = async (req, res) => {
  try {
    const data = await dataService.getDataById(req.params.id);
    res.json({ data: {...data._doc, added:moment(data.added).format('MMM, DD YYYY HH:mm:ss'),published:moment(data.published).format('MMM, DD YYYY HH:mm:ss')}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateData = async (req, res) => {
  try {
    const data = await dataService.updateData(req.params.id, req.body);
    res.json({ data: {...data._doc, added:moment(data.added).format('MMM, DD YYYY HH:mm:ss'),published:moment(data.published).format('MMM, DD YYYY HH:mm:ss')}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const data = await dataService.deleteData(req.params.id);
    res.json({ data: {...data._doc, added:moment(data.added).format('MMM, DD YYYY HH:mm:ss'),published:moment(data.published).format('MMM, DD YYYY HH:mm:ss')}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
