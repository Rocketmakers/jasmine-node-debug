#!/usr/bin/env node
var fs = require('fs');
var nodeInspector = require('node-inspector/lib/debug-server');
var cp = require('child_process');

var args = [
  '--debug-brk',
  'node_modules/jasmine/bin/jasmine.js'
];

if (process.argv.length > 2) {
  args.push.apply(args, process.argv.slice(2));
}

args.forEach(function(arg) {
  if (!/\.js$/.test(arg)) {
    return;
  }
  if (!fs.existsSync(arg)) {
    console.log("Could not find js file: " + arg);
    process.exit(1);
  }
});

var config = {
  "webPort": 8282,
  "webHost": null,
  "debugPort": 5858,
  "saveLiveEdit": false,
  "hidden": []
};

var debugServer = new nodeInspector.DebugServer();
debugServer.on('close', function() {
  console.log('debugger closed!');
  process.exit();
});
debugServer.start(config);

cp.spawn('node', args);
var url = "http://localhost:" + config.webPort + "/debug?port=" + config.debugPort;
console.log("Open:", url);
