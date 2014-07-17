var FrontendRoutes = function(frontendcontroller) {

    return {
        'home': {
            path: '/:name?',
            controller: '@controller.hello:sayHello',
            method: 'get'
        }
    };
};

module.exports = FrontendRoutes;