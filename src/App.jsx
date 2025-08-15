import { useState } from 'react'
import  './assets/weather-image.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-400 w-full h-screen text-white flex flex-col justify-start items-center'>
        <div className='border-2 mt-12'>
          <img src='' alt="weather-image" width={200} height={200}/>
          
        </div>
        <div className='flex mt-5'>
          <input type="text" placeholder='Enter city name'
          className='border text-2xl p-2 outline-none'
          />
          <button 
          className='border text-2xl bg-red-600 px-2'
          >Get</button>
        </div>
      </div>
    </>
  )
}

export default App
