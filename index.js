import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Reze is online. Stop staring and say something.");
});

app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";
  res.json({
    reply: `Hmph. "${userMessage}"? You better not be wasting my time.`
  });
});

app.listen(PORT, () => {
  console.log("Reze v1 is awake.");
  console.log("Reze: Morning. Don’t just stare at the screen — talk to me.");
});
