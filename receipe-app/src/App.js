import React, {useEffect, useState} from 'react';
import Receipe from './Receipe';
import './App.css';

const App = () => {
  const API_ID = "63597f7f";
  const APP_KEY = "59143a8d960d4b8c07329aa12c11fbe6";
  
  
  
  const [receipes, setReceipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getReceipe();
  },[query]);

  const getReceipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setReceipes(data.hits);
    console.log(data.hits)
    };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }
  
  return (
    <div className="App">
      <form onSubmit = {getSearch} className="search-form">
        <input 
        className="search-bar" 
        type="text" 
        value={search} 
        onChange = {updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className = "recipes">
      {receipes.map(receipe => (
        <Receipe 
        key = {receipe.recipe.label}
        title = {receipe.recipe.label}
        calories = {receipe.recipe.calories}
        image = {receipe.recipe.image}
        ingredients = {receipe.recipe.ingredients}
        dietLabel = {receipe.recipe.dietLabels}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
