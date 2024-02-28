const express = require("express");
const app = express();
const https = require("https");
const http = require("http");
const fs = require("fs");

const privateKey = fs.readFileSync("privatekey.pem", "utf8");
const certificate = fs.readFileSync("certificate.pem", "utf8");

const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);
const httpServer = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});

httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});
