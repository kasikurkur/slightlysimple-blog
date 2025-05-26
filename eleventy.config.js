// eleventy.config.js  （プロジェクトルート）
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  /* ------------- 日付フィルタ ------------- */
  // ISO 文字列用
  eleventyConfig.addFilter("htmlDateString", (dateObj) =>
    DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd")
  );

  // 任意フォーマット表示用
  eleventyConfig.addFilter(
    "readableDate",
    (dateObj, format = "dd LLLL yyyy", zone = "utc") =>
      DateTime.fromJSDate(dateObj, { zone }).toFormat(format)
  );

  // 共通フォーマット (index.njk 用)
  eleventyConfig.addFilter("fmtDate", (d, f = "yyyy-LL-dd") =>
    DateTime.fromJSDate(typeof d === "string" ? new Date(d) : d)
      .setZone("Asia/Tokyo")
      .toFormat(f)
  );

  /* ------------- 画像ショートコード ------------- */
  eleventyConfig.addNunjucksAsyncShortcode(
    "img",
    async (src, alt) => {
      let stats = await Image(src, {
        widths: [320, 640, 1280],
        formats: ["avif", "webp", "jpeg"],
      });
      return Image.generateHTML(stats, {
        alt,
        loading: "lazy",
        decoding: "async",
      });
    }
  );

  /* ------------- 静的アセット ------------- */
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });

  /* ------------- ディレクトリ設定 ------------- */
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "layouts",
      data: "_data",
      output: "dist",
    },
  };
};
