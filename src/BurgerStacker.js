import React, { useState } from 'react';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


const ingredientData = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
];

export default function BurgerStacker() {
  // Defining the states
  const [Ingredients, setIngredient] = useState({ingredientData})
  const [burgerList, setBurgerList] = useState([])
// console.log(Ingredients)

 
  const handleClick = (e) => {
    // console.log('handleClick is being clicked!')
    const ingredientClick = e.target.innerText;
    setBurgerList([...burgerList, ingredientClick])
  }


  const clearClick = () => {
    // console.log('clearClick click')
    setBurgerList([])
  }

  return (
    <>
      <IngredientList
        ingredientsToIngredientList={Ingredients.ingredientData}
        handleClick={handleClick}
      />

      <BurgerPane
        ingredientsToBurgerPane={burgerList}
        clearClick={clearClick}
      />
    </>
  )
}

