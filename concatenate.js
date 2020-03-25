const path = require("path");
const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const foldernames = __dirname.split("/");
  const projectName = foldernames[foldernames.length - 1];

  const files = [
    path.resolve(__dirname, "dist", projectName, "runtime-es2015.js"),
    path.resolve(__dirname, "dist", projectName, "polyfills-es2015.js"),
    // path.resolve(__dirname, "dist", projectName, "scripts.js"),
    path.resolve(__dirname, "dist", projectName, "main-es2015.js")
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/analytics-counter.js");
  await fs.copyFile(
    path.resolve(__dirname, "dist", projectName, "styles.css"),
    "elements/styles.css"
  );
  await fs.copy(
    path.resolve(__dirname, "dist", projectName, "assets"),
    "elements/assets/"
  );
})();
