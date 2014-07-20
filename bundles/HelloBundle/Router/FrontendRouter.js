var FrontendRouter = function() {

    return {
        'login': {
            path: '/login',
            controller: '@bundle.hello.controller.frontend:login'
        },
        'home': {
            path: '/:name?',
            controller: '@bundle.hello.controller.frontend:sayHello'
        }
    };
};

module.exports = FrontendRouter;