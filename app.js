var kernel = new (require('banjo'))();
var container = kernel.buildContainer(__dirname);

// Initialize middlewares
container.get('app').use(require('body-parser').json());

// Launch application
container.get('kernel.bootstrap').boot().listen();

//console.log(container.get('kernel.router').build('login'));
//console.log(container.get('kernel.router').build('home', { name: 'bob' }));