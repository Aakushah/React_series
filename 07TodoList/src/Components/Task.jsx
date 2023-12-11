import React from 'react'

function Task({index,title,description,deleteTask}) {
  

  return (

    <div className='task'>
    
        <div>
            <p>{title}</p>
            <span>{description}</span>
            
        </div>
        <button onClick={() => deleteTask(index)}>-</button>

    </div>

  )
}

export default Task