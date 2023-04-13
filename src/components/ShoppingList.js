const plantList = [
    'Monstera',
    'Ficus Lyrata',
    'Silver Pothos',
    'Yucca',
    'Palm'
]
function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList