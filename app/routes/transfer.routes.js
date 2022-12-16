const { authJwt } = require('../middleware');
const controller = require('../controllers/transfer.controller');

module.exports = function (app) {
    app.post('/test/transfer', controller.createTransfer);
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/test/transfer", [authJwt.verifyToken], controller.listTransfers);
    app.get("/test/transfer/:transferId", [authJwt.verifyToken], controller.getTransferById)

    app.put("/test/transfer/:transferId", [authJwt.verifyToken], controller.updateTransferStatus);
}