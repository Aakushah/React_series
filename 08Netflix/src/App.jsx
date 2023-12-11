import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.scss'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {
 

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
