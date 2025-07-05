const express = require('express');
let router = express.Router();
const CONSTANTS = require('./../shared/constants');
let adminRouter = require('./admin.route');

router.get('/',function(req,res){
    res.json('App ready!!');
})

router.use(CONSTANTS.URLS.ADMIN_PREFIX,adminRouter);

module.exports = router;