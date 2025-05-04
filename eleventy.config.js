const Image = require("@11ty/eleventy-img");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "dd LLLL yyyy",
    );
  });

  eleventyConfig.addPassthroughCopy("src\\assets\\css");
  eleventyConfig.addPassthroughCopy("src\\assets\\js");
eleventyConfig.addNunjucksAsyncShortcode("img", async (src, alt) => {
    let stats = await Image(src, { widths:[320,640,1280], formats:["avif","webp","jpeg"] });
    return Image.generateHTML(stats, { alt });
  });
  eleventyConfig.addPassthroughCopy("src\\assets\\img");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};
