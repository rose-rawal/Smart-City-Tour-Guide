import React,{useState} from 'react'
import context from './maincontext'
import axios from 'axios';
const Context = ({children}) => {
    const a=5;
    const [data,setData]=useState()
    const [searchPlace,setSearchPlace]=useState('')
    const [gather,setGather]=useState({location:"POKHARA",trip:`[["Phewa Lake","Barahi Temple","Sarangkot","Gupteshwor Cave","Devi's Fall","International Mountain Museum","Bindhyabasini Temple","Seti River Gorge","Tal Barahi Temple","Mahendra Cave","Shanti Stupa","Pokhara Old Bazaar"],["Sarangkot"," Shanti Stupa","Phewa Lake","Bindhyabasini Temple","Mahendra Cave","Barahi Temple","Tal Barahi Temple","Devi's Fall","International Mountain Museum","Seti River Gorge","Gupteshwor Cave","Pokhara Old Bazaar"]]`})
    const handleClick=(e)=>{
        e.preventDefault();
        console.log("search Place",searchPlace)
        axios.post('http://localhost:8000/advise/get',searchPlace).then(val=>{
          setData(val)
        })
        // axios.post('http://localhost:8000/advise/add',gather)
        // console.log(route)
    }
  return (

    <context.Provider value={{searchPlace,setSearchPlace,handleClick,data,setData}}>
    {children}
    </context.Provider>
  )
}

export default Context