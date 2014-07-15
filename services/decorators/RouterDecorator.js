module.exports = function(app/*, someRoutes, someOtherRoutes, ...*/) {

    var args = Array.prototype.slice.call(arguments);
    var routesArray = args.slice(1);

    routesArray.forEach(function(routes) {
        app.use(
            routes.mountpoint,
            routes.router
        );
    });

    return null;
};