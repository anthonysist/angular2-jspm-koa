'use strict';

let koa = require('koa');
let serve = require('koa-static');

let app = koa();

/* Logging */
function Log(msg) {
    this.logInput = function(msg) {
        console.log(msg);
    };
};

let log = new Log;

log.serverReady = function() {
    return this.logInput('server is ready');
};

app.use(serve('./'));


/* server */
app.listen(3005, log.serverReady())