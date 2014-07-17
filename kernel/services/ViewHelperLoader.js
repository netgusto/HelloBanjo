// ViewHelperLoader

var ViewHelperLoader = function(service_container, handlebars) {
    this.service_container = service_container;
    this.handlebars = handlebars;
};

ViewHelperLoader.prototype.loadViewHelpers = function() {

    var _ = require('underscore');

    // Initialize viewhelpers
    var viewhelperProviders = this.service_container.getServiceIdsHavingTag('kernel.viewhelper_provider');

    _.each(viewhelperProviders, function(viewhelperProvider) {

        var viewhelpers = this.service_container.get(viewhelperProvider.id);

        _.each(viewhelpers, function(viewhelper) {
            this.handlebars.registerHelper(viewhelper.name, viewhelper.helper);
        }, this);

    }, this);
};

module.exports = ViewHelperLoader;