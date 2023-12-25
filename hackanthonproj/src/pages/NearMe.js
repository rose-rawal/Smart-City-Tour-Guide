import React from 'react'
import { useState } from 'react';
export const NearMe = () => {
  const [touch,setTouch] = useState();

 let  locations =[{
    name:'Kathmandu',
 description:'Capital CIty of nepal'
  },
  {
    name:'Lumbini',
    description : 'Birth Place Of Buddha'
  },
  { 
    name:'Pokhara',
    description : 'Night CLub'
  }]


  const onTouchHandler=(e,index)=>{
    e.preventDefault();
    setTouch(index);
    console.log(index)
  console.log(locations[index].description)
  }
  return (
    <div>
      <div>
{locations.map((items,index)=>{
  // console.log(index)
  return(
    // <div></div>
    <div key={index} onClick={(e)=>onTouchHandler(e,index)}>{items.name}</div>
  )
})}
{touch!==null && <div>
{locations[touch]?.description}
</div>}
      </div>
    </div>
  )
}
