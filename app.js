var kernel = new (require('banjo'))();
var container = kernel.buildContainer(__dirname);
container.get('kernel.bootstrap').boot().listen();

//console.log(container.get('kernel.router').build('login'));
//console.log(container.get('kernel.router').build('home', { name: 'bob' }));