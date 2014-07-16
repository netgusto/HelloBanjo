// Bootstrap

var Bootstrap = function(serverport, app, path, routeloader) {
    this.serverport = serverport;
    this.app = app;
    this.path = path;
    this.routeloader = routeloader;
};

Bootstrap.prototype.boot = function() {
    
    this.routeloader.loadRoutes();

    var rootdir = __dirname + '../../..';

    // Initialize template engine
    var hbs = require('express-hbs').express3({
        viewsDir: this.path.join(rootdir, 'views'),
        partialsDir: this.path.join(rootdir, 'views/partials'),
        layoutsDir: this.path.join(rootdir, 'views/layouts'),
        defaultLayout: this.path.join(rootdir, 'views/layouts/default.hbs')
    });

    this.app.engine('hbs', hbs);
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