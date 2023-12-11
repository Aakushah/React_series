import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  //useState hook

  const [length,setLength] = useState(8);

  const [numberAllowed,setNumberAllowed] = useState(false);

  const [charAllowed,setCharAllowed] = useState(false);

  const [pass,setPassword] = useState("");


  //useref hook

  const passwordRef=useRef(null);


  //useCallback hook

  const passwordGenerator = useCallback( () => {

    let pass=""

    let str= "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    if(numberAllowed) str +="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+{}";

    for (let i = 0; i < length ; i++) {

      //generate random index
      let randomIndex=Math.floor(Math.random() * str.length + 1);
      //add random character to password
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);

   
  },[length,numberAllowed,charAllowed,setPassword]);


  const copyPasswordToClipbpard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,70);

    //Clipboard API to write text to the clipboard
    navigator.clipboard.writeText(pass);

  },[pass])
  


  //useEffect hook
  // useEffect(()=>{passwordGenerator()}
  // ,[length,numberAllowed,charAllowed,setPassword])


  useEffect(()=>{passwordGenerator()}
  ,[length,numberAllowed,charAllowed,setPassword])


  

  return (
    <>
     
     <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>

        <h2 className='text-white text-center my-3'>Password Generator App</h2>
        <div className='flex shadow-lg overflow-hidden mb-4 rounded-lg '>
            <input type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            ref={passwordRef}
            readOnly
            />

            <button onClick={copyPasswordToClipbpard} className='outline-none bg-blue-700 text-white p-3 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={8}
              max={70}
              value={length} 
              className='cursor-pointer'      
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              className='cursor-pointer'
              onChange={() =>{
                setNumberAllowed((prev)=> !prev);
            }}
            />
            <label>Numbers</label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id="numberInput"
              className='cursor-pointer'
              onChange={() =>{
                setCharAllowed((prev)=> !prev);
            }}
            />
            <label>Character</label> 
          </div>

        </div>

     </div>
      

    </>
  )
}

export default App
