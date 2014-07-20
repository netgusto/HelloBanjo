// FrontendController

var FrontendController = function(string) {
    this.string = string;
};

FrontendController.prototype.sayHelloAction = function(request, response) {

    var name = request.params.name || this.string || 'World';
    
    response.render('hello', {
        name: name
    });

};

FrontendController.prototype.loginAction = function(request, response) {
    
    response.send('Login !');

};

module.exports = FrontendController;