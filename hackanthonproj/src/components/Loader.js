import React from 'react'

const Loader = () => {
  return (
  
         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="animate-pulse rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
     
    </div>
  )
}

export default Loader