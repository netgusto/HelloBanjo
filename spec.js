var parameters = {
    rootdir: __dirname,
    serverport: 3000,
    defaultgreeting: 'dear Nodist'
};

var services = {
    
    'path': {
        create: {
            module: 'path'
        }
    },

    'app': {
        create: 'express'
    },

    'server': {
        create: {
            module: './services/ServerService',
            args: [
                { $ref: 'app' },
                { $ref: 'serverport' },
            ]
        }
    }
};

var controllers = {
    'controller-hello': {
        create: {
            module: './controllers/HelloController',
            args: [
                { $ref: 'defaultgreeting' }
            ]
        }
    }
};

var routes = {
    'route-frontend': {
        create: {
            module: './routes/FrontendRoutes',
            args: [
                { $ref: 'controller-hello' }
            ]
        }
    }
};

var decorators = {
    /*
        Service decorators
        return null, but alter other services like app
    */

    'decorator-handlebars': {
        create: {
            module: './services/decorators/HandlebarsDecorator',
            args: [
                { $ref: 'app' },
                { $ref: 'path' },
                { $ref: 'rootdir' }
            ]
        }
    },

    'decorator-router': {
        create: {
            module: './services/decorators/RouterDecorator',
            args: [
                { $ref: 'app' },
                { $ref: 'route-frontend' }
            ]
        }
    }
};

/* Compile spec */

var extend = require('util')._extend;

var spec = {};

extend(spec, parameters);
extend(spec, services);
extend(spec, controllers);
extend(spec, routes);
extend(spec, decorators);

//console.log(spec);

// Export spec

module.exports = spec;