var express = require('express');
var router = express.Router();
var employee = require("../controller/EmployeeController.js");



// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

/*// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete); */


module.exports = router;