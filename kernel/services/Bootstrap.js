// Bootstrap

var Bootstrap = function(serverport, app, path, handlebars, router, routeloader, viewhelperloader) {
    this.serverport = serverport;
    this.app = app;
    this.path = path;
    this.handlebars = handlebars;
    this.router = router;
    this.routeloader = routeloader;
    this.viewhelperloader = viewhelperloader;
};

Bootstrap.prototype.boot = function() {
    
    this.routeloader.loadRoutes();
    this.viewhelperloader.loadViewHelpers();

    var rootdir = __dirname + '../../..';

    this.app.engine('hbs', this.handlebars.express3({
        viewsDir: this.path.join(rootdir, 'views'),
        partialsDir: this.path.join(rootdir, 'views/partials'),
        layoutsDir: this.path.join(rootdir, 'views/layouts'),
        defaultLayout: this.path.join(rootdir, 'views/layouts/default.hbs')
    }));
    this.app.set('view engine', 'hbs');

    return this;
};

Bootstrap.prototype.listen = function() {
    
    var serverport = this.serverport;
    // Listen for connection events
    return this.app.listen(serverport, function() {
        console.log('-- Listening on port %d', serverport);
    });
};

module.exports = Bootstrap;