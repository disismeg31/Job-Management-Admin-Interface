const CONSTANTS = require('./../shared/constants');
const express = require('express');
let router = express.Router();
let adminController = require('./../controllers/admin.controller');

router.route(CONSTANTS.subUrls.admin.Get_Jobs).get(adminController.getJobs);
router.route(CONSTANTS.subUrls.admin.Add_Job).post(adminController.newJob);

module.exports = router;