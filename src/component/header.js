import React from 'react'
import './header.css'
import Book from '../book.js'



const Header = (e) => {
  const submitClick=(e)=>{
 e.preventDefault();
   < Book/>
  }
   
  
  return (
    <div  className='header'>
        <h1>Cars Collection</h1>
        <button className='cart' type='button' onClick={submitClick}>Book</button>
        
    </div>
  )
}

export default Header