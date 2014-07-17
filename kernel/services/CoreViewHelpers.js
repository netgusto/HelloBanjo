// CoreViewHelpers

var CoreViewHelpers = function(handlebars, router) {
    
    return [
        {
            name: 'link',
            helper: function(text, url) {
                return new handlebars.SafeString(
                    "<a href='" + url + "'>" + text + "</a>"
                );
            }
        },
        {
            name: 'route',
            helper: function(routename, helperparams) {
                routeparams = helperparams.hash || {};
                return router.build(routename, routeparams);
            }
        },
    ];
};

module.exports = CoreViewHelpers;