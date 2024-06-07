import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Sever successfully running on port ${PORT}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Sever runnings on port ${PORT}`);
});
