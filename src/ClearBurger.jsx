export default function ClearBurger ({clearClick}) {
    return (
        <input 
            type="button" 
            value="Eat the Burger" 
            onClick={clearClick}
        />
    )
}