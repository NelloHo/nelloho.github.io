module.exports = function(eleventyConfig) {
    // Pass-through files (copy directly to output)
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("posts/**/*.jpg");
    eleventyConfig.addPassthroughCopy("posts/**/*.jpeg");
    eleventyConfig.addPassthroughCopy("posts/**/*.png");
    eleventyConfig.addPassthroughCopy("posts/**/*.gif");
    eleventyConfig.addPassthroughCopy("posts/**/*.svg");

    // Add a collection for blog posts
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("posts/**/index.md").sort((a, b) => {
            return b.date - a.date; // Sort by date, newest first
        });
    });

    // Set the input and output directories
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
