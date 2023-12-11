import React, { useState,useContext } from 'react'

import UserContext from '../context/UserContext';

const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const {setUser}=useContext(UserContext);

  const submitHanlder = (e) =>{
        e.preventDefault();
        setUser({username,password});
  } 

  return (
    <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value) } placeholder='Your Name' />
        <hr />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value) } placeholder='Set Password' />
        <hr />
        <button onClick={submitHanlder}>Submit</button>

    </div>
  )
}

export default Login