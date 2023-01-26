import {useState,useEffect} from 'react'


 export const UseFetch = (url) => {
   
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
   
   useEffect(()=>{

     fetch(url)
     .then((resp)=>{
         
        if(resp.status>=200 && resp.status<=299){
        
            return resp.json()
        }  

        else{

            setIsLoading(false);
            setIsError(true);
            
            throw new Error(resp.statusText);
            

        }})

        .then ((cars)=>{

           setCars(cars);
           setIsLoading(false);

        })

       
     },[url]);


    if(isLoading) {

        return(
         <div>
           <h1>Loading...</h1>
         </div>
)}
   
     
    if(isError) {
   
       return(
         <div>
          <button className='btn' >toggle Error</button>
          {!isError && <h1>Error....</h1>}
         </div>
)}

  return {isLoading,isError,cars};
};


