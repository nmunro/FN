/**
 * Copyright (c) 2014 Neil Munro <neilmunro@gmail.com>.
 */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        esnext: true
      },
      all: [ 'src/fn.js' ]
    },

    jsdoc2md: {
      oneOutputFile: {
        src: 'src/fn.js',
        dest: 'README.md'
      }
    } 
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
  
  // Default task(s).
  grunt.registerTask('default', ['jsdoc2md', 'jshint']);
};
