import React from 'react'

import { useParams } from 'react-router-dom'

const User = () => {
  const {id}=useParams();
  return (
    <div className='text-center text-4xl text-sky-800 font-bold p-4 bg-gray-600'>User:{id}</div>
  )
}

export default User