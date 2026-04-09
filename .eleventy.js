module.exports = function(eleventyConfig) {
  // Pass through copy for Media and CSS/JS if they are in src
  eleventyConfig.addPassthroughCopy("src/Media");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Keep .html extension in output to match current links
  eleventyConfig.addGlobalData("eleventyComputed.permalink", () => {
    return (data) => {
      return `${data.page.filePathStem}.html`;
    };
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
