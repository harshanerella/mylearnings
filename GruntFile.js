module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    	options: {
    		separator: "\n\n"
    	},
    	dist: {
    		src: ['js/Main.js','js/Controller.js'],
    		dest: 'bin/Concat.js'
    	}
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');

  //tasks
  grunt.registerTask('default', ['concat']);

};