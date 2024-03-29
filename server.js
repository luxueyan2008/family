
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var merge = require('./libs/merge.js');
var app = module.exports = express.createServer();
var grunt   = require( 'grunt-compass' );
var compass = require( 'grunt-compass/tasks/lib/compass' ).init( grunt );
// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(process.env.port || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
merge.merge();

