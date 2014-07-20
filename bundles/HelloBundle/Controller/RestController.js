// RestController

var RestController = function(userentity) {
    this.userentity = userentity;
};

RestController.prototype.indexAction = function(request, response) {
    this.userentity.collection().query(function(qb) {
        qb.limit(100).orderBy('id','DESC');
    }).fetch().then(function(collection) {
        response.json(collection);
    });
};

RestController.prototype.createAction = function(request, response) {
    this.userentity.forge({name: request.body.name}).save().then(function(user) {
        response.json(user);
    });
};

RestController.prototype.showAction = function(request, response) {
    this.userentity({id: request.params.user}).fetch().then(function(model) {
        response.json(model);
    });
};

RestController.prototype.updateAction = function(request, response) {
    this.userentity({id: request.params.user}).fetch().then(function(model) {
        model.save({name: request.body.name}, {patch: true}).then(function(patchedmodel) {
            response.json(patchedmodel);
        })
    });
};

RestController.prototype.destroyAction = function(request, response) {
    this.userentity({id: request.params.user}).fetch().then(function(model) {
        model.destroy();
        response.json(model);
    });
};

module.exports = RestController;