

import React,{useState} from 'react'

const SimpleInterest = () => {

  const[prtq,setPRTQ]= useState({
    p:0,
    r:0,
    t:0,
    q:0
  });
  

  
  const setP=(event)=>{
     
    setPRTQ( (prevState)=>{
      return {...prevState,p:Number(event.target.value)};
      
  });
  console.log("Object Changed");
  
};

  
        


  
const setR=(event)=>{
     
  setPRTQ( (prevState)=>{
    return {...prevState,r:Number(event.target.value)};
    
});
console.log("Object Changed");

};
   
const setT=(event)=>{
     
  setPRTQ( (prevState)=>{
    return {...prevState,t:Number(event.target.value)};
    
});
console.log("Object Changed");

};

const setQ=(event)=>{
     
  setPRTQ( (prevState)=>{
    return {...prevState,q:Number(event.target.value)};
    
});
console.log("Object Changed");

};
 


  return (<>
  
  <div>
            <h3>Simple Interest</h3>
           P <input type="number" onChange={setP} />
           <br></br>
          R  <input type="number" onChange={setR} />
          <br></br>
          T  <input type="number" onChange={setT} />
          <br></br>
          Q  <input type="number" onChange={setQ} />
            
            <h2>{prtq.p*prtq.r*prtq.t*prtq.q/100}</h2>

        </div>
   </>
  )
}

export default SimpleInterest;