// Router

var Router = function(app) {

    var Router = require('named-routes');
    var router = new Router();
    router.extendExpress4(app);
    router.registerAppHelpers(app);

    return router;
};

module.exports = Router;