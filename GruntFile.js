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
    },
      uglify:{
        options:{
           mangle: false
        },
         my_target:{
          files:{
             'bin/js/uglify.min.js' : ['bin/Concat.js']
          }
         }

      }
    
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //tasks
  grunt.registerTask('JustJavascript', ['concat', 'uglify']);

  grunt.registerTask('default', ['concat']);

};