import Ingredients from './Ingredients'


export default function IngredientList({ingredientsToIngredientList, handleClick}) {
    const ingredientList = ingredientsToIngredientList.map((ingredient, index) => {
        return ( 
            <li key={`ingredientKey-${index}`} onClick={handleClick}>
                <Ingredients 
                    ingredient={ingredient.name}
                />
            </li>
        )
    })
    return (
        <>
            <h2>A list of the ingredients</h2>
            <ul>
                {ingredientList}
            </ul>
        </>
    )
}