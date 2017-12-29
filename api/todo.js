"use strict";
var express = require("express");
var router = express.Router();
var tasks = [
  {id: 1, completed: true, itemName: 'enroll in JavaScript course', date: '2017-10-20'},
  {id: 2, completed: true, itemName: 'schedule study time', date: '2017-10-20'},
  {id: 3, completed: true, itemName: 'build small projects', date: '2017-10-20'},
  {id: 4, completed: true, itemName: 'find mentor', date: '2017-10-20'}
];
router.get('/tasks', function (req, res, next) {
    res.json(tasks);
});
module.exports = router;
