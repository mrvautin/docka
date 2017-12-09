const chalk = require('chalk');

module.exports = {
    logs: {
        command: 'docker-compose logs -f',
        usage: `logs ${chalk.yellow('<container>')}`,
        description: 'Tails the logs for a given container',
        usageText: '`docka logs <container>`',
        streamOutput: true,
        inputs: 2,
        optional: false
    },
    start: {
        command: 'docker-compose start',
        usage: `start ${chalk.yellow('<container>')} ${chalk.grey('(optional)')}`,
        description: 'Starts all or a specific container',
        usageText: '`docka start <container>` (optional)',
        streamOutput: false,
        inputs: 2,
        optional: true
    },
    stop: {
        command: 'docker-compose stop',
        usage: `stop ${chalk.yellow('<container>')} ${chalk.grey('(optional)')}`,
        description: 'Starts all or a specific container',
        usageText: '`docka stop <container>` (optional)',
        streamOutput: false,
        inputs: 2,
        optional: true
    },
    restart: {
        command: 'docker-compose stop{{app}}&& docker-compose start',
        usage: `restart ${chalk.yellow('<container>')} ${chalk.grey('(optional)')}`,
        description: 'Restarts all or a specific container',
        usageText: '`docka restart <container>` (optional)',
        streamOutput: false,
        inputs: 2,
        optional: true
    },
    ssh: {
        command: 'docker-compose exec',
        usage: `ssh ${chalk.yellow('<container>')}`,
        description: 'Give ssh (bash) access to a container',
        usageText: '`docka ssh <container>`',
        streamOutput: true,
        inputs: 2,
        optional: true
    },
    ps: {
        command: 'docker ps',
        usage: 'ps',
        description: 'Lists all containers',
        usageText: '`docka ps`',
        streamOutput: true,
        inputs: 1,
        optional: true
    },
    version: {
        command: '',
        usage: `-version, -v ${chalk.grey('(Shows the version)')}`,
        description: 'Shows the app version',
        usageText: '`docka -v`',
        streamOutput: true,
        inputs: 2,
        optional: true
    }
};
