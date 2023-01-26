
import React from 'react'
import {UseFetch}from './useFetch'
import './project.css'




const url='https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96';


const Project = () => {
  const {cars} =UseFetch(url);

  return (
    <div>
      <section className='products'>

     
        {
          cars.map((user ,id)=>{
            const {images,carName,carPrice ,detail}=user

        
            return  <li key={id}>

            <img src={images} alt='login'/>
            <h4>{carName}</h4>
            <p>{carPrice}</p>
            <button type='button' onClick={detail} className='primary'></button>
           

            </li>

          }) }
      </section>

    </div>
  )
}

export default Project