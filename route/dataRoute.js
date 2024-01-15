const express = require("express");

const {
  getAllData,
  createMultipleData,
  createData,
  getDataById,
  updateData,
  deleteData,
  getCountriesInstensity,
  getAllSourceDetails
} = require("../controller/dataController");

const router = express.Router();

router.route("/").get(getAllData).post(createData);
router.route("/intensities").get(getCountriesInstensity)
router.route("/sourcedetails").get(getAllSourceDetails)
router.route("/many").post(createMultipleData)
router.route("/:id").get(getDataById).put(updateData).delete(deleteData);


module.exports = router;
