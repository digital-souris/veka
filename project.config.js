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
        './src/pages/news.jade',
        './src/pages/news-item.jade',
        './src/pages/return.jade',
        './src/pages/delivery.jade',
        './src/pages/contacts.jade',
        './src/pages/card.jade',
        './src/pages/korzina.jade'
    ]
};
