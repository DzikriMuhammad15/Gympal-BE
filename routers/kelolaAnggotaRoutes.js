var express = require('express');
var router = express.Router();
const kelolaAnggotaController = require("../controllers/kelolaAnggotaController");



// ! TO CONTROLLER
router.put("/setAnggotaActive/:idAnggota", kelolaAnggotaController.setActive);
router.put("/setAnggotaNonActive/:idAnggota", kelolaAnggotaController.setNonActive);
router.get("/getAllDataAnggota", kelolaAnggotaController.getAllDataAnggota);

module.exports = router;
