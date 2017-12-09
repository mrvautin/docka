const{spawn} = require('child_process');
const cliSpinner = require('cli-spinner').Spinner;
const chalk = require('chalk');
const log = console.log;

const spinner = new cliSpinner({
    text: chalk.blue('processing..') + chalk.green('%s'),
    stream: process.stderr,
    onTick: function(msg){
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
});

const start = (command, cli) => {
    return new Promise((resolve, reject) => {
        let errData;
        const interactiveShell = {
            stdio: 'inherit'
        };

        const flags = cli.flags;
        const inputs = cli.input;

        // Add flags if present
        if(command.flags && flags[command.flags]){
            command.command += ` ${flags[command.flags]}`;
        }

        // If there are multiple inputs, we append them
        if(inputs.length === 2){
            command.command = `${command.command} ${inputs[1]}`;
        }

        // If ssh we want to add the interactive flags and set app args
        if(inputs.length !== command.inputs && command.optional === false){
            console.log(`No app specified. Usage: docka ${inputs[0]} <app name>`);
            cli.showHelp();
        }

        // Mutate the command for SSH
        if(inputs[0] === 'ssh'){
            command.command = `${command.command} bash`;
        }

        // Mutate the restart command if <app_name> supplied
        if(inputs[0] === 'restart' && inputs.length === 2){
            command.command = command.command.replace(/{{app}}/, ` ${inputs[1]} `);
            command.command = `${command.command} ${inputs[1]}`;
        }else{
            // No <app_name> supplied so remove and restart all
            command.command = command.command.replace(/{{app}}/, ' ');
        }

        // set the command to run
        let commandString = ['-c', command.command];

        // Start spinner
        if(command.streamOutput === false){
            spinner.start();
        }

        // Output command on debug
        if(flags.d){
            console.log('Running command: ', commandString);
        }

        // spawn the command
        const cmd = spawn('/bin/sh', commandString, interactiveShell);

        // Listen for output
        if(cmd.stdout){
            cmd.stdout.on('data', (data) => {
                errData += data;
            });
        }

        // Listen for errors
        if(cmd.stderr){
            cmd.stderr.on('data', (data) => {
                errData += data;
            });
        }

        // All done
        cmd.on('exit', (code, signal) => {
            if(command.streamOutput === false){
                spinner.stop();
            }
            // Debugging
            if(flags.d){
                log(chalk.red('Exit code: ', code));
                log(chalk.red('Signal: ', signal));
            }
            if(errData){
                resolve(errData);
            }
            resolve();
        });
    });
};

module.exports = {
    start
};
