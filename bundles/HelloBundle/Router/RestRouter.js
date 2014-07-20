var RestRouter = function() {

    return {
        'rest.users.index': {
            path: '/users',
            method: 'get',
            controller: '@bundle.hello.controller.rest:index'
        },
        'rest.users.create': {
            path: '/users',
            method: 'post',
            controller: '@bundle.hello.controller.rest:create',
        },
        'rest.users.show': {
            path: '/users/:user',
            method: 'get',
            controller: '@bundle.hello.controller.rest:show'
        },
        'rest.users.update': {
            path: '/users/:user',
            method: 'put',
            controller: '@bundle.hello.controller.rest:update'
        },
        'rest.users.delete': {
            path: '/users/:user',
            method: 'delete',
            controller: '@bundle.hello.controller.rest:destroy'
        }
    };
};

module.exports = RestRouter;