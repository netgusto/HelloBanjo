// RouteLoader

var RouteLoader = function(service_container , app) {
    this.service_container = service_container;
    this.app = app;
};

RouteLoader.prototype.loadRoutes = function() {

    var _ = require('underscore');

    // Initialize routes
    var routeProviders = this.service_container.getServiceIdsHavingTag('kernel.route_provider');

    _.each(routeProviders, function(routeProvider) {

        var routes = this.service_container.get(routeProvider.id);

        var mountpoint = '/';

        if(routeProvider.attributes.mountpoint) {
            mountpoint = routeProvider.attributes.mountpoint.replace(/\/+$/, '') + '/';
        }

        _.each(routes, function(route, routename) {

            var path = route.path.replace(/^\/+/, '');

            this.app.get(
                mountpoint + path,
                routename,
                function() {
                    
                    // Lazy controller initialization

                    var controllerAndAction = route.controller.split(':');
                    var serviceid = this.service_container.getServiceIdFromArgumentReference(controllerAndAction[0]);
                    var service = this.service_container.get(serviceid);

                    var action = controllerAndAction[1] + 'Action';

                    service[action].apply(service, arguments);
                }.bind(this)
            );
        }, this);

    }, this);
};

module.exports = RouteLoader;