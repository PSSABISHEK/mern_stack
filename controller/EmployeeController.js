var express = require('express');
var mongoose = require('mongoose');
var schema = require('../models/schema.js');
var Employee = mongoose.model("schema");
var employeeController = {};


/* create employee function */

employeeController.create = function (req, res) {
    res.sendfile("../www/create.html");
};

/* save new employee function */

employeeController.save = function (req, res) {
    var employee = new Employee(req.body);

    employee.save(function (err) {
        if (err) {
            console.log(err);
            res.sendfile("../www/create.html");
        } else {
            console.log("Successfully created an employee.");
            console.log(req.body);
        }
    });
};


module.exports = employeeController;
