var Kernel = function() {
}

Kernel.prototype.buildContainer = function() {

    var kerneldir = __dirname + '/..';
    var rootdir = kerneldir + '/..';

    var _ = require('underscore');
    var containerBuilder = require('service-container');
    var container = require('service-container').buildContainer(kerneldir);

    var bundleDefinitions = {
        config: {
            services: this.registerBundles()
        },
        dir: rootdir
    };

    containerBuilder.parseFile(bundleDefinitions, container);

    var bundleProviders = container.getServiceIdsHavingTag('kernel.bundle_provider');

    _.each(bundleProviders, function(bundleProvider) {
        var bundle = container.get(bundleProvider.id);
        var bundleRootDir = bundle.getServicesFilePath();

        // Parse all of the service.json files and compile definitions
        var files = containerBuilder.findServiceJsonFiles(bundleRootDir);
        files = containerBuilder.sortFilesByHierarchy(files);

        // Ensure that we iterate in sorted order
        for (i = 0; i < files.length; i++) {
            containerBuilder.parseFile(files[i], container);
        }

    }, this);

    return container;
}

Kernel.prototype.registerBundles = function() {
    return {};
}

module.exports = Kernel;