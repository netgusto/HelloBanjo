var FrontendRoutes = function(frontendcontroller) {

    var router = require('express').Router();
    router.get('/:name?', frontendcontroller.sayHelloAction);
    return router;
};

module.exports = FrontendRoutes;