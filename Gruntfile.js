module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      dist: {
        files: ['src/**/*.js'],
        tasks: ['babel']
      }
    },

    babel: {
      dist: {
        files: {
          "dist/voxels.js": "src/voxels.js"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['babel']);

};
