const { verifyRegister } = require('../middleware');
const controller = require('../controllers/auth_controller');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Header",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/test/auth/register",
        verifyRegister.checkDuplicateUsername,
        controller.register,
    );

    app.post("/test/auth/login", controller.login)
}