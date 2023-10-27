
module.exports = function (eleventyConfig) {

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