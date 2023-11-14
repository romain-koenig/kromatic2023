const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

	eleventyConfig.addTransform("htmlmin", function (content) {

		if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}
	});

	eleventyConfig.addPassthroughCopy("./src/.htaccess");

	eleventyConfig.addPassthroughCopy("./src/*.svg");
	eleventyConfig.addPassthroughCopy("./src/*.png");
	eleventyConfig.addPassthroughCopy("./src/*.ico");

	eleventyConfig.addPassthroughCopy("./src/*.webmanifest");

	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addPassthroughCopy("./src/js/");

	eleventyConfig.addWatchTarget("./src/js/");
	eleventyConfig.addWatchTarget("./src/css/");

	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/favicon");

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};