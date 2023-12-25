import React from 'react'
import context from './maincontext'

const Context = ({children}) => {
    const a=5;
  return (

    <context.Provider value={{a}}>
    {children}
    </context.Provider>
  )
}

export default Context