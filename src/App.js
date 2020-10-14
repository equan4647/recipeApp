import React, { useEffect, useState } from 'react';
import './App.css';



const App = ()=>{

  const APP_ID = "491612e9"
  const APP_KEY = "bc90add79ed7616e3cf64c6f21b10312"
  var query = "chicken"

  const examplereq =  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter,setcounter] = useState(0);


  useEffect(()=>{
    console.log("Effect used")
  })

  return(
    <div className="App">
        <form className="search-form">
          <input type="text" className="search-bar"/>
          <button type="submit" className="search-button" onClick={()=>setcounter(counter+1)}>
            {counter}
          </button>


        </form>
    </div>
  );
}

export default App;
