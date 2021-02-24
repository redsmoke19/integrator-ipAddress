const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/svg4everybody/dist/svg4everybody.min.js',
  'dev/static/js/files/dynamic_adapt.js',
  'node_modules/imask/dist/imask.min.js',
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp
        .src(vendorsScripts)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/static/js/'))
    : cb();
};
