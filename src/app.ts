import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello form server");
});

export default app;
