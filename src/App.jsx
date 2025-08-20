import {useEffect, useState } from 'react';
import myImage from './assets/weather-image.png'
import SearchBar from './components/SearchBar';
import EmptyCard from './components/EmptyCard';
import WeatherCard from './components/WeatherCard';

function App() {
  //Api Key..
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const [loading,setLoading] = useState(false)
  const [city, setCity] = useState("");
  const [weather,setWeather] = useState({});
  const [history,setHistory] = useState([]);



  const handleCityName = async () => {
    setLoading(true);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    const data = await res.json();
    console.log(data);
    setWeather(data);

    if(data && data.main){
      const newHistory = [data,...history].slice(0,3);
      setHistory(newHistory);
      localStorage.setItem("getHistory",JSON.stringify(newHistory));
    }

    setLoading(false);
    setCity("");
  
  }


  const handleAction = (e) => {
    if(e.key === 'Enter'){
      handleCityName();
    }
  }

  useEffect(() => {
    const store = localStorage.getItem("getHistory");
    if(store){
    setHistory(JSON.parse(store));
    }
  },[])


  return (
    <>
      <div className='bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 
                w-full min-h-screen text-white flex flex-col justify-start items-center'>
        <div className=' mt-12'>
          <img src={myImage}alt="weather-image" width={100} height={100}/>
          
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
        <h1 className='mt-10 text-3xl font-bold  '>Recent searches</h1>
        <div className=' mt-2 w-full flex  gap-4 items-center justify-center align-middle flex-wrap mb-2'>
          
          {
            history.map((items,index) => (
            
              <WeatherCard
              key={index}
              weather={items}
              myImage={myImage}
              />
            
            ))
          }
        </div>
        
      </div>
    </>
  )
}

export default App
