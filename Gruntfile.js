module.exports = function (grunt) {
	/**
	 * Load Plugin
	 */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-recess');

	/**
	 * Task Configuration
	 */
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// grunt-contrib-connect task configuration
		connect: {
			server: {
				options: {
					base: ".",
					port: 8000,
					host: 'localhost',
					livereload: true
				}
			}
		},

		// grunt-recess task configuration
		recess: {
			dist: {
				options: {
					compile: true,
					compress: false,
				},
				files: {
					'assets/styles/main.css':['less/main.less'],
				}
			}
		},
		// grunt-contrib-watch task configuration
		watch: {
			options: {livereload: true},
			html: {
				files: ['*.html'],
			},
			less: {
				files: ['less/*.less'],
				tasks: ['recess']
			}
		}
	});

	/**
	 * Register Tasks
	 */
	grunt.registerTask('server', ['connect', 'watch']);
	grunt.registerTask('build', ['recess']);
};