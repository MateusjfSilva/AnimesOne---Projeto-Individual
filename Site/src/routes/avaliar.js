var express = require("express");
var router = express.Router();

var avaliarController = require("../controllers/avaliarController");

router.get("/listar", function (req, res) {
    avaliarController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avaliarController.publicar(req, res);
});

module.exports = router;