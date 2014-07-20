/*container.get('kernel.orm').knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('username');
}).then(function () {
    User.forge({username: 'jerome'}).save().then(function() {
        console.log('saved !');
        new User({id: 1}).fetch().then(function(model) {
            console.log(model.get('username'));
        });
    });
});*/

var User = function(orm) {
    return orm.Model.extend({
        tableName: 'users'
    });
}

module.exports = User;