var path = require('path'),
    serviceContainer = require('service-container');

var container = serviceContainer.buildContainer(__dirname, {
    ignoreNodeModulesDirectory: true
});

var rootdir = __dirname;
var app = container.get('app');

// Initialize routes
var routeProviders = container.getServiceIdsHavingTag('kernel.route_provider');
for(var routeProviderIndex in routeProviders) {
    var routeProviderService = container.get(routeProviders[routeProviderIndex].id);
    app.use(
        routeProviders[routeProviderIndex].attributes.mountpoint,
        routeProviderService
    );
}

// Initialize template engine
var hbs = require('express-hbs').express3({
    viewsDir: path.join(rootdir, 'views'),
    partialsDir: path.join(rootdir, 'views/partials'),
    layoutsDir: path.join(rootdir, 'views/layouts'),
    defaultLayout: path.join(rootdir, 'views/layouts/default.hbs')
});

app.engine('hbs', hbs);
app.set('view engine', 'hbs');

// Listen for connection events
var server = app.listen(container.getParameter('serverport'), function() {
    console.log('-- Listening on port %d', container.getParameter('serverport'));
});