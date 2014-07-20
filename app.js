var kernel = new (require('banjo'))();
var container = kernel.buildContainer(__dirname);

// Connect middlewares
container.get('app').use(require('body-parser').json());

// Launch application
container.get('kernel.bootstrap').boot().listen();