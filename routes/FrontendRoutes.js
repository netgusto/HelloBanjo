var FrontendRoutes = function(frontendcontroller) {

    var router = require('express').Router();
    
    router.get('/:name?', frontendcontroller.sayHelloAction);

    return {
        'mountpoint': '/',
        'router': router
    };
};

module.exports = FrontendRoutes;