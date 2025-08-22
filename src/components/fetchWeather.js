export const fetchWeather = async(city,API_KEY) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

  if(!res.ok)
  {
    throw new console.error("failed to fetch weather");
    
  }
  return res.json();
}

