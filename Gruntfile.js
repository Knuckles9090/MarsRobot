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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Default task(s).
    grunt.registerTask('default', ['clean', 'ngAnnotate', 'uglify', 'less']);
    grunt.registerTask('create-production', ['clean', 'ngAnnotate', 'uglify', 'less', 'copy']);

};