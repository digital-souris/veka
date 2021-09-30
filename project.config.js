// Override Defaults

module.exports = {
  srcPath: "./src",
  templatePath: "./src/pages",
  buildPath: "./dist",
  minifyHTML: true,
  minifyJS: true,
  minifyCSS: true,
  homePage: "index.html",
  templateFiles: [
      "./src/pages/index.jade",
    "./src/pages/catalog.jade",
    './src/pages/catalog-list.jade',
    './src/pages/news.jade'
  ]
};
