import React from 'react'

import Login from '../src/Components/Login'
import Profile from '../src/Components/Profile'
import UserContextProvider from './context/UserContextProvider'

import './App.css'


function App() {

  return (
    <UserContextProvider>
      <h1>welcome page</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
