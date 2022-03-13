import Ingredients from './Ingredients'
import ClearBurger from './ClearBurger'

export default function BurgerPane ({ingredientsToBurgerPane, clearClick}) {
    const ingredientList = ingredientsToBurgerPane.map((ingredient, index) => {
        return (
            <li key={`ingredientKey-${index}`} onClick={clearClick}>
                <Ingredients 
                    ingredient={ingredient}
                    onClick = {clearClick}
                />
            </li>
        )
    })
    return (
        <>
            <h1>This is the BurgerPane Page</h1>
            <ul>
                {ingredientList}
            </ul>
            <ClearBurger clearClick={clearClick}/>
        </>
    )
}