module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'react-datepicker.css' : 'src/stylesheets/datepicker.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },

      browserify: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      }
    },

    browserify: {
      all: {
        src: ['src/datepicker.js'],
        dest: 'react-datepicker.js',
        options: {
          transform: ['reactify'],
          bundleOptions: {
            standalone: 'DatePicker',
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['watch']);
};