/*
 * 3dSS Gruntfile
 * @author Ben Valentine
 */

'use strict';

module.exports = function(grunt){

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // project details
    project: {
      app: '3dSS',
      css: [
        'styles/scss/*.scss'
      ],
      js: [
        'scripts/js/*/*.js'
      ]
    },

    // sass compilation
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'styles/css/*.css':'<%= project.css =%>'
        }
      },

      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'styles/css/*.css':'<%= project.css =%>'
        }
      }
    },

    watch: {
      files: ['<%= sass.files =%>'],
      tasks: ['sass']
    },

  });

  console.log('hello');

  grunt.registerTask('default', [
    'watch'
  ]);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
