const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(process.cwd());
const port = Number(process.env.PORT || 8020);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

http
  .createServer((req, res) => {
    let file = decodeURIComponent(req.url.split("?")[0]);
    if (file === "/") file = "/index.html";
    const target = path.resolve(path.join(root, file));
    if (target !== root && !target.startsWith(`${root}${path.sep}`)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    fs.readFile(target, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, {
        "Content-Type": types[path.extname(target)] || "text/plain",
        "Connection": "close",
        "Cache-Control": "no-store"
      });
      res.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Velora preview running at http://127.0.0.1:${port}`);
  });
