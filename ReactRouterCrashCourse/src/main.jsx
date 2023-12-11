import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{GithubDataLoader} from './Components/Github/Github.jsx'

import './index.css'

import {RouterProvider,createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom';




//first way to create a route


// const router = createBrowserRouter([
// {
//   path:'/',
//   element:<App />,
//   children:[
//     {
//       path:'',
//       element:<Home />
//     },
//     {
//       path:'about',
//       element:<About />

//     },
//     {
//       path:'contact',
//       element:<Contact />
//     }

//   ]


// }
// ])



//second way to create a route


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App />}>


      {/* outer  components  */}
      <Route path='' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User/>} />
      <Route
      loader={GithubDataLoader}
      path='github' 
      element={<Github/>} 
      />
      

   
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
