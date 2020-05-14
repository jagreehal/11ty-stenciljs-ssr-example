const htmlmin = require("html-minifier");
const cpx = require("cpx");
const { renderToString } = require("stencil-web-components/hydrate");

const isProduction = process.env.NODE_ENV === "production";

module.exports = function (config) {
  config.addPassthroughCopy("static");
  if (isProduction) {
    config.addPassthroughCopy({
      "node_modules/stencil-web-components/dist/stencil-web-components":
        "static/stencil-web-components",
    });
  } else {
    cpx.watch(
      "node_modules/stencil-web-components/www/build/**/*.*",
      "static/stencil-web-components"
    );
  }

  config.addTransform("ssr", async (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      try {
        const { html } = await renderToString(content);
        return htmlmin.minify(html, {
          useShortDoctype: true,
          removeComments: false,
          collapseWhitespace: true,
        });
      } catch (error) {
        return error;
      }
    }
  });
};
