module.exports = function (eleventyConfig) {

  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: "vxmpxre.com/diary/src",
      output: "vxmpxre.com/diary",
    },

    templateFormats: ["md", "njk", "html"]
  };
};