import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import { Search } from './components/Search';
import foods from './foods.json';


function App() {
  const [listOfFoods, setlistOfFoods] = useState(foods)
  //console.log(listOfFoods)
  

  return (
    <div className="App">
      <Search setlistOfFoods={setlistOfFoods} />
      <AddFoodForm setlistOfFoods={setlistOfFoods}/> 
      {listOfFoods.map((food) => (
        <FoodBox food={food} setlistOfFoods={setlistOfFoods}/>
        
      ))}
      

      
    </div>
  );
}

export default App;
