var FrontendRoutes = function(frontendcontroller) {

    var router = require('express').Router();
    router.get('/:name?', frontendcontroller.sayHelloAction.bind(frontendcontroller));
    return router;
};

module.exports = FrontendRoutes;