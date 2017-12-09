#!/usr/bin/env node

const meow = require('meow');
const process = require('./lib/process');
const commands = require('./lib/commands');
const lib = require('./lib');

const usageText = lib.getUsageText(commands);

const cli = meow(usageText, {
    flags: {
        log: {
            type: 'boolean',
            alias: 'log'
        },
        start: {
            type: 'boolean'
        },
        d: {
            type: 'boolean'
        },
        version: {
            type: 'boolean',
            alias: 'v'
        },
        autoHelp: true
    }
});

// Catch the version flag
if(cli.flags.v || cli.flags.version){
    cli.showVersion();
}

// check for no flags/opts
if(cli.input.length === 0){
    cli.showHelp();
}

if(commands[cli.input[0]]){
    process.start(commands[cli.input[0]], cli)
    .then((data) => {
        if(data){
            console.log(data);
        }
    });
}else{
    cli.showHelp();
}
