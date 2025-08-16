import { useEffect, useState } from 'react';
import myImage from './assets/weather-image.png';

function App() {
  const API_KEY = "324defafb7c44333747c0041701a350a";

  const [city, setCity] = useState("london");
  const [weather,setWeather] = useState({});

  
  

  const handleCityName = async () => {
    
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    const data = await res.json();
    console.log(data);
    setWeather(data);
    setCity("");
  
}



  return (
    <>
      <div className='bg-blue-400 w-full h-screen text-white flex flex-col justify-start items-center'>
        <div className=' mt-12'>
          <img src={myImage}alt="weather-image" width={100} height={100}/>
          
        </div>
        <div className='flex mt-5'>
          <input type="text" placeholder='Enter city name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='border text-2xl p-2 outline-none'
          />
          <button 
          onClick={handleCityName}
          className='border text-2xl bg-red-600 px-2'
          >Get</button>
        </div>
        {
          weather && weather.main ? (
          <div className=' mt-12  w-87 h-30 bg-white/40 backdrop:blur-md  text-2xl text-black flex items-center shadow-2xl rounded-2xl p-3 border border-white/30 py-7'>
            <div className=' h-full w-25 flex flex-col justify-center items-center gap-0 '>
              <img src={myImage} alt="cloud image" width={90} height={70}/>
              <h2 className='text-2xl text-amber-300 mb-2 font-bold'>{weather.name}</h2>
            </div>
            <div className='h-full w-25 flex flex-col items-center justify-center'>
              <h1
              className='text-2xl font-semibold text-blue-400'
              >{weather.main.temp}
              </h1>
              <p className='text-2xl font-semibold text-white'>Celcius</p>
            </div>
            <div className='w-30 flex flex-col font-bold text-white text-sm text-center'>
              <p>Sky: "{weather.weather[0].description}"</p>
              <p>humidity:{weather.main.humidity}</p>
              <p>feels_like:{weather.main.feels_like}</p>
            </div>
          </div>
            
          ) : (
            <div>
              not here

            </div>
          )
        }
      </div>
    </>
  )
}

export default App
