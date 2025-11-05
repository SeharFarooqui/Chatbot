💬 ChatBot (React + Flask)

A simple and interactive chatbot web application built using React (frontend) and Flask (backend).
It allows users to send messages to an AI-powered backend and get instant responses — just like ChatGPT!

🚀 Features

🤖 Real-time chat between user and bot

⚡ React frontend with Fetch API for communication

🔥 Flask backend handling API requests

💾 Persistent conversations ( localStorage)

🎨 Clean and responsive UI using Tailwind CSS

🧩 Easy to customize and extend with AI or rule-based logic

🧠 Tech Stack

Frontend	React, Tailwind CSS
Backend	Python Flask
API Communication	Fetch API
Deployment (optional)	Vercel / Render / Netlify
🛠️ Installation & Setup
1️⃣ Clone this repository
git clone https://github.com/your-username/chatbot.git
cd chatbot

2️⃣ Backend (Flask)

Go into the backend folder:

cd backend


Install dependencies:

pip install -r requirements.txt


Run Flask server:

python app.py


It will start at http://localhost:5000

3️⃣ Frontend (React)

Go into the frontend folder:

cd frontend


Install dependencies:

npm install


Run React app:

npm run dev


It will start at http://localhost:5173

⚙️ Configuration

Create a .env file in your Flask folder for secret keys or API URLs:

FLASK_ENV=development
OPENAI_API_KEY=your_key_here


(Make sure .env is added to your .gitignore!)

🧩 Folder Structure
chatbot/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── templates/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│   ├── package.json
│
├── .gitignore
└── README.md



🤝 Contributing

Pull requests are welcome!
If you’d like to add new features or fix bugs, feel free to fork this repo and create a PR.

📜 License

This project is licensed under the MIT License — see the LICENSE
 file for details.

💡 Author

Sehar Farooqui
