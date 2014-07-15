module.exports = function(app, path, rootdir) {

    var hbs = require('express-hbs').express3({
        viewsDir: path.join(rootdir, 'views'),
        partialsDir: path.join(rootdir, 'views/partials'),
        layoutsDir: path.join(rootdir, 'views/layouts'),
        defaultLayout: path.join(rootdir, 'views/layouts/default.hbs')
    });

    app.engine('hbs', hbs);
    app.set('view engine', 'hbs');

    return null;
};