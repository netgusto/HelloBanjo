require('service-container')
    .buildContainer(__dirname + '/kernel')
    .get('kernel.bootstrap')
        .boot()
        .listen();