import React, { useState } from 'react'
import AdvisorPlaces from '../mini/AdvisorPlaces'

const Advise = () => {
    const [searchPlace,setSearchPlace]=useState('')
    const handleClick=(e)=>{
        e.preventDefault();
        console.log("search Place",searchPlace)
    }
  return (
    <div className='flex flex-col items-center'>
        <div className='pt-10 text-2xl font-bold mb-10'>Prepare a Plan</div>
        <div className=''>
            <form action="">
                <input type="text"  className='border-2 border-black border-solid rounded-2xl w-64 h-10 px-5 text-center' placeholder='Destination' onChange={e=>setSearchPlace(e.target.value)}/>
                <button className=' bg-black h-10 px-8 text-white rounded-2xl ml-4' onClick={handleClick}>GO</button>
            </form>
        </div>
        <AdvisorPlaces/>
    </div>
  )
}

export default Advise