🌤️ Weather App

A simple and responsive weather application built with React.js and Tailwind CSS. It uses the OpenWeatherMap API to fetch real-time weather data based on the city entered by the user.

✨ Features

🔎 Search for weather by city name
🌡️ Displays temperature, weather condition,  humidity, and more
🎨 Beautiful glassmorphism UI with TailwindCSS
⏳ Loading spinner while fetching data
📦 Modular components (SearchBar, WeatherCard, EmptyCard) for clean code structure

🚀 Tech Stack

React.js – Frontend library

Tailwind CSS – Styling

OpenWeatherMap API – Weather data

📂 Project Structure
src/
 ├── components/
 │   ├── SearchBar.jsx
 │   ├── WeatherCard.jsx
 │   ├── EmptyCard.jsx
 │   └── Loader.jsx (optional)
 ├── assets/
 │   └── weather-image.png
 ├── App.jsx
 └── index.js

🔑 API Setup

1.Create an account on OpenWeatherMap
2.Generate a free API key from the API Keys section.
3.Replace the placeholder in App.jsx:
  const API_KEY = "your_api_key_here";

▶️ Run Locally

Clone the repo and install dependencies:
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev

-Author
Himanshu Singh

📜 License

This project is open-source and free to use.
