"use strict";
var express = require("express");
var router = express.Router();
var tasks = [
  {id: 1, completed: true, itemName: 'bread', date: '2017-10-20'},
  {id: 2, completed: true, itemName: 'coconut milk', date: '2017-10-20'},
  {id: 3, completed: true, itemName: 'kale', date: '2017-10-20'},
  {id: 4, completed: true, itemName: 'water', date: '2017-10-20'}
];
router.get('/tasks', function (req, res, next) {
    res.json(makes);
});
module.exports = router;
