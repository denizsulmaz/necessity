module.exports = function(eleventyConfig) {
  // Pass through copy for Media and CSS/JS if they are in src
  eleventyConfig.addPassthroughCopy("src/Media");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
