import React, { useContext } from 'react'
import context from '../context/maincontext'

const Home = () => {
    const a=useContext(context);
    console.log(a)
  return (
    <div>Home</div>
  )
}

export default Home