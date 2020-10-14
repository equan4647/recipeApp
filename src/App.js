import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Recipe from './recipe'


const App = ()=>{

  const APP_ID = "491612e9"
  const APP_KEY = "bc90add79ed7616e3cf64c6f21b10312"
  //var query = "chicken"
  const [Recipes,setRecipes] = useState([]) 
  const [Search,setSearch] = useState('') 
  const [Query,setQuery] = useState('Pasta') 

  const examplereq =  `https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_KEY}`



  useEffect( ()=>{
    getRecipes()
  },[Query])





 
 const getRecipes = async ()=> {
  axios.get(examplereq)
  .then(function (response) {
    // handle success
    setRecipes(response.data.hits)
    console.log(response.data.hits);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
 }

 const updateSearch = e =>{
    setSearch(e.target.value)
 }



 const doSearch = e =>{
   e.preventDefault()
   setQuery(Search)
   setSearch('')
 }
 
  return(
    <div className="App">
        <form className="search-form" onSubmit={doSearch}>
          <input type="text" className="search-bar" value={Search} onChange={updateSearch}/>
          <button type="submit" className="search-button" >
            Submit
          </button>
        </form>
      <div className="rec">
       {Recipes.map(recipe=>(
         <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} key={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
       ))}
      </div>  
    </div>
  );
}

export default App;
