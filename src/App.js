import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe'


const App = ()=>{

  const APP_ID = "491612e9"
  const APP_KEY = "bc90add79ed7616e3cf64c6f21b10312"
  var query = "chicken"

  const examplereq =  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`


  const [recipes,setrecipes] = useState([]) 

  useEffect( ()=>{
    getRecipes()

  },[])

  const iter = (recipes)=>{
    <Recipe/>
  }

 const getRecipes = async ()=> {
    const responce =  await fetch(examplereq) 
    const data = responce.json();
    setrecipes(data.hits)
 }


  return(
    <div className="App">
        <form className="search-form">
          <input type="text" className="search-bar"/>
          <button type="submit" className="search-button" >
            Submit
          </button>
        </form>
     
       {iter()}
    </div>
  );
}

export default App;
