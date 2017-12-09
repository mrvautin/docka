const gulp = require('gulp');
const commands = require('./lib/commands');
const lib = require('./lib');

gulp.task('writeReadme', () => {
    lib.writeReadmeFile(commands);
});

gulp.task('deploy', ['writeReadme']);
