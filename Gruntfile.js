module.exports=function(grunt){

	var appConfig = {
		app: require('./bower.json').appPath || 'app',
	};

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		appCfg:appConfig,
		haml:{
			dist:{
				files:{
					'<%= appCfg.app %>/index.html':'<%= appCfg.app %>/index.haml',
					'<%= appCfg.app %>/views/index_p1.html':'<%= appCfg.app %>/views/index_p1.haml',
					'<%= appCfg.app %>/views/index_p2.html':'<%= appCfg.app %>/views/index_p2.haml'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.registerTask('default',['haml']);
}
