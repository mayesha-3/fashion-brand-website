const express = require("express");
const SSI = require("ssi");
const path = require("path");

const app = express();
const port = 5500;
const baseDir = path.join(__dirname);

const ssi = new SSI({
  baseDir: baseDir,
  ext: ".html",
});

app.use((req, res, next) => {
  const filePath = path.join(baseDir, req.path);
  if (filePath.endsWith(".html")) {
    const content = ssi.compileFile(filePath).contents;
    res.send(content);
  } else {
    next();
  }
});

app.use(express.static(baseDir));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
