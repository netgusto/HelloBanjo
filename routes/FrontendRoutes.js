var FrontendRoutes = function(frontendcontroller) {

    return {
        'login': {
            path: '/login',
            controller: '@controller.frontend:login'
        },
        'home': {
            path: '/:name?',
            controller: '@controller.frontend:sayHello'
        }
    };
};

module.exports = FrontendRoutes;