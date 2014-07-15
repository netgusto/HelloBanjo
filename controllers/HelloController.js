// HelloController

var HelloController = function(string) {
    this.string = string;
};

HelloController.prototype.sayHelloAction = function(request, response) {

    var name = request.params.name || this.string || 'World';
    
    response.render('hello', {
        name: name
    });

};

module.exports = HelloController;