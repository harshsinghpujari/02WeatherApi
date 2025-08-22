import React from 'react'
import { motion } from 'framer-motion'
import WeatherCard from '../components/WeatherCard'

function HistoryCard({myImage,history}) {
  return (
    <div>
       <div className=' mt-0 w-full flex  gap-4 items-center justify-center align-middle flex-wrap mb-2'>
          
          {
            history.map((items,index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            >
              <WeatherCard
              weather={items}
              myImage={myImage}
              />
            </motion.div>
            
            ))
          }
        </div>
    </div>
  )
}

export default HistoryCard
