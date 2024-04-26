const { Op } = require("sequelize");
const empModel = require("..//models/emp.model");

// Read All
exports.getAllEmployees = async () => {
  let empArray = await empModel.findAll();
  return empArray;
};

//Read Single
exports.getEmpById = async (eid) => {
  let empObj = await empModel.findByPk(eid);
  return empObj;
};

// Create
exports.addEmployee = async (empObj) => {
  await empModel.create(empObj);
  return "Employee details are inserted";
};

// Update
exports.updateEmp = async (empObj) => {
  await empModel.update(empObj, { where: { empno: empObj.empno } });
  return "Employee details are udpated";
};

// Delete
exports.deleteDeptByEmpNo = async (eno) => {
  await empModel.destroy({ where: { empno: eno } });
  return "Employee details are deleted";
};
