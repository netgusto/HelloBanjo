var kernel = new (require('./kernel/AppKernel'))();
var container = kernel.buildContainer();

container.get('kernel.bootstrap').boot().listen();

//container.get('bundle.hello').sayHello()

//console.log(container.get('kernel.router').build('login'));
//console.log(container.get('kernel.router').build('home', { name: 'bob' }));