const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors());
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI('AIzaSyAdHk6BjIks-ZS-ZY-GFK3kauC5FkV1lwE');

app.post("/", async (req, res) => {
  const { key } = req.body;
  console.log(key);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = key;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text().split("\n"); 
  res.status(200).json({ text });
});


app.listen(3000 , ()=>{
  console.log("server connected//");
}) 