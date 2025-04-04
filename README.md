# Google Translator - Next.js Edition 🚀

Welcome to **Google Translator**, a badass translation app built with Next.js! This project takes translation to the next level with **text-to-speech**, **speech-to-text**, and support for **20+ languages**. Want to hear the output with your ears? We’ve got you covered. Need more languages? Customize it like a pro! Let’s dive in and get this beast running.

---

## Features 🔥

- **Text Translation**: Translate text into 20+ languages effortlessly.
- **Speech-to-Text**: Speak and let the app convert it to text.
- **Text-to-Speech**: Listen to the translated output with a slick audio feature.
- **20+ Language Support**: From Hindi to Spanish, we’ve got a solid lineup.
- **Extensible**: Add your favorite languages via `utils/language.constant.ts`.
- **Powered by Gemini API**: Fast, reliable, and cutting-edge translation.

---

## Prerequisites 🛠️

Before you fire this up, make sure you’ve got these installed:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- A **Gemini API Key** (you’ll need this for translation magic)

---

## Setup Instructions ⚙️

Follow these steps to get the app running on your machine:

### 1. Clone the Repo

```bash
git clone https://github.com/Sahil9214/Google-Translatore

```

### Install Dependencies

npm install

```
### Configure Enviorment Variables

GEMINI_API_KEY=
MONGODB_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

### Start the Development Server

npm run dev

### 🎯How to use

🔹 Text Translation – Enter your text, select a target language, and click "Translate".
🔹 Speech-to-Text – Click the 🎤 microphone icon, speak, and see your words converted to text.
🔹 Text-to-Speech – After translation, press the 🔊 play button to hear the output.
🔹 Switch Languages – Choose from over 20 languages in the dropdown menu.
🔹 Add More Languages – Customize the language list in utils/language.constant.ts.

### 📂Project Structure

Here's an overview of the key files and directories:

📂src/app/api – Contains the backend code.
📂 utils/language.constant.ts – Defines supported languages (edit to add more).
📂 .env.local – Stores your Gemini API key (DO NOT commit this to GitHub).
📂 src/app – Frontend code with different folders (components,hooks,config,libs,utils).
