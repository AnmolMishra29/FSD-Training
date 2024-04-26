const express = require("express");
const router = express.Router();
const deptService = require("../services/dept.service");

//  get request  -    /Detps
router.get("/Depts", async function (req, res) {
  let dataObj = {};
  dataObj.deptsArray = await deptService.getAllDepartments();
  res.render("deptList", dataObj);
});

router.get("/Depts/:id", async function (req, res) {
  var { id } = req.params;

  let dataObj = {};
  dataObj.deptObj = await deptService.getDepartmentById(id);
  res.render("deptDetails", dataObj);
});

router.get("/CreateDept", async function (req, res) {
  let dataObj = {};
  res.render("deptCreate", dataObj);
});

router.post("/CreateDept", async function (req, res) {
  // Read data from post request  and Prepare the object with request values
  var deptObj = {
    deptno: parseInt(req.body.deptno),
    dname: req.body.dname,
    loc: req.body.loc,
  };

  // Send that object server by calling service method
  await deptService.addDept(deptObj);

  // Redirect to Main / Home Page
  res.redirect("/DeptController/Depts");
});

module.exports = router;
