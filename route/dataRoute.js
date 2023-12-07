const express = require("express");

const {
  getAllData,
  createMultipleData,
  createData,
  getDataById,
  updateData,
  deleteData,
} = require("../controller/dataController");

const router = express.Router();

router.route("/").get(getAllData).post(createData);
router.route("/:id").get(getDataById).put(updateData).delete(deleteData);
router.route("/many").post(createMultipleData)


module.exports = router;
