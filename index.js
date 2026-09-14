const express = require("express");
const env = require("dotenv");
const app = express();
const PORT = env.DEVELOPMENT_PORT || 8080;



app.use((req, res) => {
  res.status(404).json({"error":true,"status":404,"errorDetails":'Page not found"});
})

app.listen(PORT, () => {
  console.log("=============");
  console.log("Acc Template");
  console.log(`http://localhost:${PORT}`);
  console.log("=============");
});
