module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      'client/app/app.min.js': 'client/app/app.min.js'
    },
    ngAnnotate: {
      options: {
        remove: true,
        add: true,
        singleQuotes: true
      },
      dist: {
        src: [
          'client/app/app.module.js',
          'client/app/app.routes.js',
          'client/app/app.constants.js',
          'client/app/app.resources.js',
          'client/app/**/*.js'
        ],
        dest: 'client/app/app.min.js'
      }
    },
    less: {
      styles: {
        files: {
          "client/assets/css/styles.min.css": "client/assets/less/styles.less"
        },
        options: {
          plugins: [
            new (require('less-plugin-clean-css'))(""),
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
          ]
        }
      }
    },
    clean: ["client/app/app.min.js", "client/app/assets/css/styles.min.css"],
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: [
              'client/index.html',
              'client/assets/*',
              'client/assets/**/*',
              'client/bower_components/**',
              'client/app/app.min.js',
              'client/app/components',
              'client/app/components/**/**.html'
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