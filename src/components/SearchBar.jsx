import React from 'react'

function SearchBar({city,handleAction,setCity,handleCityName}) {
  return (
    <div>
      <div className='flex mt-5'>
          <input type="text" placeholder='Enter city name'
          value={city}
          onKeyDown={handleAction}
          onChange={(e) => setCity(e.target.value)}
          className='border text-2xl p-2 outline-none'
          />
          <button 
            onClick={handleCityName}
            className='border text-2xl bg-red-600 px-2'
          >
            Get
          </button>
      </div>
    </div>
  )
}

export default SearchBar
