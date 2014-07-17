var container = require('service-container').buildContainer(__dirname + '/kernel');
container.get('kernel.bootstrap').boot().listen();

//console.log(container.get('kernel.router').build('login'));
//console.log(container.get('kernel.router').build('home', { name: 'bob' }));