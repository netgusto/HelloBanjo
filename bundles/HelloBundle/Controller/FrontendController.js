// FrontendController

var FrontendController = function(string, userentity) {
    this.string = string;
    this.userentity = userentity;
};

FrontendController.prototype.sayHelloAction = function(request, response) {

    var name = request.params.name || this.string || 'World';
    var User = this.userentity;

    User.forge({name: name}).save().then(function(user) {

        User.collection().query(function(qb) {
            qb.limit(10).orderBy('id','DESC');
        }).fetch().then(function(collection) {
            console.log(collection.models);
            response.render('hello', {
                name: name,
                lastten: collection.models
            });
        });

    });
};

FrontendController.prototype.loginAction = function(request, response) {
    response.send('Login !');
};

module.exports = FrontendController;