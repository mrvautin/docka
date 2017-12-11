const chalk = require('chalk');
const fs = require('fs');

// Gets the usage text for the CLI --help
const getUsageText = (commands) => {
    let usageText = `${chalk.grey('Usage')}\r\n$ docka ${chalk.yellow('<input>')}\r\n\r\n${chalk.grey('Options')}\r\n`;
    Object.keys(commands).forEach((key) => {
        usageText += `${commands[key].usage} - ${chalk.green('Description')}: ${commands[key].description}\r\n`;
    });

    return usageText;
};

// Writes the readme file using a template and the commands file
const writeReadmeFile = (commands) => {
    let readmeText = fs.readFileSync('./src/readmeTemplate.md', 'utf-8');
    let commandsText = '';
    Object.keys(commands).forEach((key) => {
        commandsText += `### # ${key}\r\n\r\n`;
        commandsText += `${commands[key].description}\r\n\r\n`;
        commandsText += '**Usage**:\r\n\r\n';
        commandsText += `${commands[key].usageText}\r\n\r\n`;
        commandsText += '---\r\n\r\n';
    });

    fs.writeFileSync('./README.md', readmeText + commandsText);
};

module.exports = {
    getUsageText,
    writeReadmeFile
};
