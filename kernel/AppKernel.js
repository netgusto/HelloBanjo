var util = require("util");
var Kernel = require("./classes/Kernel");

var AppKernel = function() {
}

util.inherits(AppKernel, Kernel);

module.exports = AppKernel;