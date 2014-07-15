var wire = require('wire');

wire(require('./spec'), { require: require }).then(function(container) {
    console.log('-- IOC Container is wired.');
    console.log('-- Application booted.');
}, function(err) {
    console.log(err);
});