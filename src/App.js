import React from 'react'
import './index.css'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Car from './car.js'

function App() {
  return (
    <div className='container'>
    <Router>
    
    <Routes  >
   
    <Route path="/" element={ <Car/>}/>
   
    </Routes> 
  </Router>  
    </div>
  )
}

export default App