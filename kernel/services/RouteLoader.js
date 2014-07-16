// RouteLoader

var RouteLoader = function(service_container, app) {
    this.service_container = service_container;
    this.app = app;
};

RouteLoader.prototype.loadRoutes = function() {

    // Initialize routes
    var routeProviders = this.service_container.getServiceIdsHavingTag('kernel.route_provider');

    for(var routeProviderIndex in routeProviders) {
        var routeProviderService = this.service_container.get(routeProviders[routeProviderIndex].id);
        this.app.use(
            routeProviders[routeProviderIndex].attributes.mountpoint,
            routeProviderService
        );

        this.app.hello = "world";
    }
};

module.exports = RouteLoader;