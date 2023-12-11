import { useState } from 'react'

import './App.css'

function App() {
  const [bgcolor,setbgcolor]=useState("olive");

  return (
    
      <div className='w-screen h-screen duration-200'
      style={{backgroundColor:bgcolor}}>

        <h1 className='text-white text-center text-3xl'>background color changer App</h1>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-zinc-400 px-3 py-2 rounded-lg'>

            <button onClick={()=> setbgcolor("olive")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>olive</button>
            <button onClick={()=> setbgcolor("green")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=> setbgcolor("orange")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"orange"}}>orange</button>
            <button onClick={()=> setbgcolor("black")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
            <button onClick={()=> setbgcolor("blue")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=> setbgcolor("pink")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
            <button onClick={()=> setbgcolor("violet")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>violet</button>
            <button onClick={()=> setbgcolor("red")} className='outlined-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>

          </div>
        </div>
      </div>

    
  )
}

export default App
