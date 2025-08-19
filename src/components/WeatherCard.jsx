import React from 'react'
function weatherCard({weather,myImage}) {
  return (
    <div>
      <div className=' mt-12  w-90 h-32 bg-white/40 backdrop-blur-md  text-2xl text-black flex items-center shadow-2xl rounded-2xl p-5 border border-white/30 py-7'>
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
    </div>
  )
}

export default weatherCard
