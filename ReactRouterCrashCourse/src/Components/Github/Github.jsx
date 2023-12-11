import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom';

const Github = () => {
    

    const data=useLoaderData();

    // working Good but not optimized for this instead use loader from react-router-dom documentation 
  // const [data,setData]=useState([]);
  
  // useEffect(()=>{
  //       fetch('https://api.github.com/users/hiteshchoudhary')
  //       .then(res => res.json())
  //       .then(data => {
  //           console.log(data);
  //           setData(data);
  //       })
  //   },[]);

  


  return (

    <div>
        <div className='text-center text-4xl text-sky-800 font-bold p-4 bg-gray-600'>Github:{data.followers}</div>
        <img src={data.avatar_url}  alt='github' width={300} />
    </div>
  )
}

export default Github

export const GithubDataLoader = async () =>{
    const req= await fetch('https://api.github.com/users/Aakushah');
    return req.json();
}

