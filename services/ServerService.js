module.exports = function(express, port) {
    
    var server = express.listen(port, function() {
        console.log('-- Listening on port %d', port);
    });

    return server;
};