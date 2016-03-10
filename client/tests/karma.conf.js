module.exports = function(config) {
  config.set({
    basePath : '../client/',
    frameworks: ['jasmine'],
    files: [
        '../client/bower_components/angular/angular.js',
        '../client/bower_components/angular-animate/angular-animate.js',
        '../client/bower_components/angular-resource/angular-resource.js',
        '../client/bower_components/angular-ui-router/release/angular-ui-router.js',
        '../client/bower_components/angular-utils-pagination/dirPagination.js',
        '../client/app/app.min.js',
        '../client/tests/unit/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-ie-launcher',
        'karma-jasmine'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox', 'IE'],
    singleRun: true,
    junitReporter : {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
    },
    concurrency: Infinity
  })
};
