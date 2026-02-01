const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Reze is online. Stop staring and say something.");
});

app.post("/talk", (req, res) => {
  const userInput = req.body.message || "";
  res.json({
    reply:
  });
});

app.listen(PORT, () => {
  console.log("Reze v1 is awake.");
  console.log("Reze: Morning. Don’t just stare at the screen — talk to me.");
});
