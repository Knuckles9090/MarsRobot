module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            'app/app.min.js': 'app/app.min.js'
        },
        ngAnnotate: {
            options: {
                remove: true,
                add: true,
                singleQuotes: true
            },
            dist: {
                src: [
                    'app/app.module.js',
                    'app/app.routes.js',
                    'app/app.constants.js',
                    'app/app.directives.',
                    'app/app.services.js',
                    'app/app.resources.js',
                    'app/**/*.js'
                ],
                dest: 'app/app.min.js'
            }
        },
        less: {
            styles: {
                files: {
                    "assets/css/styles.min.css": "assets/less/styles.less"
                },
                options: {
                    plugins: [
                        new (require('less-plugin-clean-css'))(""),
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                    ]
                }
            }
        },
        bump: {
            options: {
                files: [
                    'package.json'
                ],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                metadata: '',
                regExp: false
            }
        },
        clean: ["app/app.min.js", "app/assets/css/styles.min.css", "dist"],
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'index.html',
                            'assets/*',
                            'assets/**/*',
                            'bower_components/**',
                            'app/app.min.js',
                            'app/components',
                            'app/components/**/**.html'
                        ],
                        dest: 'dist/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Default task(s).
    grunt.registerTask('default', ['clean', 'ngAnnotate', 'uglify', 'less']);
    grunt.registerTask('create-production', ['clean', 'ngAnnotate', 'uglify', 'less', 'copy']);

};