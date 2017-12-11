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
    build: {
        command: 'docker-compose build',
        usage: 'build',
        description: 'Builds Docker containers with docker-compose file',
        usageText: '`docka build`',
        streamOutput: true,
        inputs: 1,
        optional: true
    },
    images: {
        command: 'docker images',
        usage: 'images',
        description: 'Lists all Docker images',
        usageText: '`docka images`',
        streamOutput: true,
        inputs: 1,
        optional: true
    },
    prune: {
        command: 'docker container prune -f',
        usage: 'prune',
        description: 'WARNING: This removes all stopped containers',
        usageText: '`docka prune`',
        streamOutput: true,
        inputs: 1,
        optional: true
    },
    cleanup: {
        command: 'docker image prune -f',
        usage: 'cleanup',
        description: 'WARNING: This removes all dangling (non used/tagged) images',
        usageText: '`docka cleanup`',
        streamOutput: true,
        inputs: 1,
        optional: true
    },
    killall: {
        command: 'docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)',
        usage: 'killall',
        description: 'WARNING: This stops and removes ALL containers.',
        usageText: '`docka killall`',
        streamOutput: true,
        inputs: 1,
        optional: true
    },
    version: {
        command: '',
        usage: `-version, ${chalk.yellow('-v')} ${chalk.grey('(Shows the version)')}`,
        description: 'Shows the app version',
        usageText: '`docka -v`',
        streamOutput: true,
        inputs: 2,
        optional: true
    }
};
