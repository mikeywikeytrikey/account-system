const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = env.DEVELOPMENT_PORT || 8080;

app.listen(PORT, () => {
  console.log("=============");
  console.log("Acc Template");
  console.log(`http://localhost:${PORT}`);
  console.log("=============");
});
