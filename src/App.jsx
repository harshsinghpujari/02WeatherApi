import {useEffect, useState } from 'react';
import { circOut, easeIn, motion } from 'framer-motion';
import myImage2 from './assets/weather-image2.png'
import myImage from './assets/weather-image.png'
import SearchBar from './components/SearchBar';
import EmptyCard from './components/EmptyCard';
import WeatherCard from './components/WeatherCard';
import HistoryCard from './components/HistoryCard';
import { fetchWeather } from './components/fetchWeather';

function App() {
  //Api Key..
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const [loading,setLoading] = useState(false)
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weather,setWeather] = useState({});
  const [history,setHistory] = useState([]);



  const handleCityName = async () => {

    if(!city.trim()){
      setError("Please Enter a city");
      return;
    }
    setError("");
    setLoading(true);
  
  try
  {
    const data = await fetchWeather(city,API_KEY);
    

   
      setWeather(data);
      if(data && data.main)
      {
        const newHistory = [data,...history].slice(0,3);
        setHistory(newHistory);
        localStorage.setItem("getHistory",JSON.stringify(newHistory));
      }
   
  }
  catch(err){
    setError("network issues occured")
  }
    setLoading(false);
    setCity("");
  
  }

  const getBackgroundClass = (condition) => {
    switch (condition) {
      case "Clear":
        return "bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500";
      case "Clouds":
        return "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600";
        case "scattered clouds":
        return "bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900";
      case "Rain":
        return "bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900";
      case "ThunderStorm":
        return "bg-gradient-to-br from-purple-800 via-indigo-900 to-black";
  
      default:
       return "bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600";
    }
  };

  const handleAction = (e) => {
    if(e.key === 'Enter'){
      handleCityName();
      setError("");
    }
  }

  const handleHistory = () => {
    setHistory([]);
    localStorage.removeItem("getHistory");
  }

  useEffect(() => {
    const store = localStorage.getItem("getHistory");
    if(store){
    setHistory(JSON.parse(store));
    }
  },[])


  return (
    <>
      < motion.div 
       
      className={`${getBackgroundClass(weather?.weather?.[0]?.main)}
      w-full min-h-screen text-white flex flex-col justify-start items-center transition-colors duration-1000 font-sans`}>
        <div className=' mt-12'>
          <img src={myImage2}alt="weather-image" width={100} height={100}/>
          
        </div>
        
          <SearchBar 
            city={city}
            setCity={setCity}
            handleAction={handleAction}
            handleCityName={handleCityName}
           
          />
        
        {
          loading === true ? (
            <div className='flex flex-col items-center mt-5'>
            <div className='border-4 border-white border-dashed w-20 h-20 rounded-full animate-spin'></div>
            <p className='mt-2 text-lg'>Loading...</p>
            </div>

          ): (
          weather && weather.main ? (
          <WeatherCard
            weather={weather}
            myImage={myImage}
          />
          )
           : (
           <EmptyCard/>
          )
        )   
      }
      {
        error &&
        <motion.div 
        initial={{opacity:0, y:-30}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.7, ease:circOut}}
        className='border bg-white text-red-600 font-semibold p-4 m-4 rounded-md shadow-md'>
          <h1>{error}</h1>
        </motion.div>
      }
      {
        history.length>0 && 
        (
          <div className='flex justify-between items-center gap-3'>
          <h1 className='mt-10 text-3xl font-bold  '>Recent searches</h1>
          <button
          onClick={handleHistory}
          className='h-10 border-none bg-amber-300 text-xl text-blue-500 px-2 rounded-2xl mt-10 cursor-pointer hover:text-red-500 py-0 shadow-2xl'>Clear
        </button>
        </div>
        )
      }
      {
        <HistoryCard
          history={history}
          myImage={myImage}
        />
      }
        
      </motion.div>
    </>
  )
}

export default App
