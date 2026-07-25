const express = require("express");
const auditWebsite = require("../controllers/auditController");


const router = express.Router();


router.post("/", auditWebsite);


module.exports = router;