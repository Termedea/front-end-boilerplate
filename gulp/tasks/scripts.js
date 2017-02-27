var gulp 	= require("gulp"),
	webpack = require("webpack");

gulp.task("scripts", ["modernizr"], function(callback) {
	webpack(require("../../webpack.config.js"), function(err, stats) {
		if(err) {
			console.error("A JavaScript error occurred \n" + err.toString());
		}
		console.info(stats.toString());
		callback();
	});
});
