import React, { useContext } from 'react'


import UserContext from '../context/UserContext';

const Profile = () => {

  const {user} =useContext(UserContext);

 return(
        <>

         {
                user === null ? ( <h1>Please Login First</h1>) : (<h1>Welcome: {user.username}</h1>)

         }   

        </>

     )
    
   
    
    
}

export default Profile

