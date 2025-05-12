<h1 align="center">🦌 antelope.ai</h1>
<p align="center">
  <b>A Gemini-powered AI chatbot clone</b><br>
  <sub>Built with Node.js + Express • Gemini Pro API • Minimal Frontend</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Powered%20By-Gemini%20AI-blueviolet?style=for-the-badge&logo=google" />
  <img src="https://img.shields.io/badge/Made%20With-Node.js-green?style=for-the-badge&logo=node.js" />
</p>

---

## ✨ What is antelope.ai?

`antelope.ai` is a lightweight clone of Google's **Gemini AI chat**, designed to showcase how to integrate Gemini Pro with a Node.js backend and a simple HTML+JS frontend. Whether you want to build a chatbot, a creative assistant, or an AI-powered UI—this project is your perfect starting point.

---

## 📸 Preview

> Add a screenshot or GIF here if available

---

## 🚀 Features

- 🔥 Uses [Gemini Pro API](https://ai.google.dev/)
- ⚡ Real-time responses
- 🧠 Prompt → AI Text Generation
- 🪶 Clean and modular codebase
- 🌐 CORS-enabled REST API

---

## 📦 Tech Stack

| Layer    | Stack             |
|----------|-------------------|
| Backend  | Node.js, Express  |
| AI Model | Google Generative AI (Gemini Pro) |
| Frontend | HTML, CSS, JavaScript |
| APIs     | REST over HTTP    |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ 18
- A Gemini Pro API key from [Google AI Studio](https://ai.google.dev/)
- 
****
### 🔧 Installation

git clone https://github.com/Tushar9794/antelope.ai.git
cd antelope.ai

npm install
<br>
****
**🔑  Set your API key**
<br>
Replace the hardcoded key in index.js:<br>
const genAI = new GoogleGenerativeAI('YOUR_API_KEY');

****
**🚴‍♂️ Run locally**<br>

node index.js
Open your browser at http://localhost:3000.
****
**🧪 Example Request**<br>

POST http://localhost:3000/
Request Body:

{
  "key": "What's the capital of France?"
}
Response:


{
  "text": ["The capital of France is Paris."]
}
****
**📁 Folder Structure**<br>

├── client.js <br>    
├── index.js <br>       
├── package.json  <br>   
└── public/     <br>      
****

**❗ Known Issues**
The frontend JS has a bug: document("questionInput") should be document.getElementById("questionInput")

API key is hardcoded—replace it with .env usage for safety
****

**🧑‍💻 Author**
<br>  
**👨‍💻 Project by:** ***Tushar singh<br>***

**🌐 GitHub:** ***@Tushar9794***

