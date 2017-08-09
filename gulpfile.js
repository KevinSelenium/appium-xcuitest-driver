"use strict";


let gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

boilerplate({
  build: 'appium-xcuitest-driver',
  coverage: {
    files: ['./test/**/*-specs.js', '!./test/e2e/**'],
    verbose: true
  },
});
