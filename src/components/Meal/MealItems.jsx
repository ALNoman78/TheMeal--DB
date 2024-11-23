import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const MealItems = ({ meals }) => {
    const { idMeal, strMealThumb, strMeal, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = meals
    const navigator = useNavigate()
    const handleDetails = () => {
        navigator(`/meal/${idMeal}`)
    }
    return (
        <div className='md:w-10/12 mx-auto w-full'>
            <h2 className='text-xl font-medium'>Dish Name : {strMeal}</h2>
            <img className='w-[450px] rounded-xl' src={strMealThumb} alt="" />
            <h3 className='font-medium text-lg'>Ingredient's : </h3>
            <ul className='list-disc capitalize ml-5'>
                <li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
            </ul>
            <button className='btn' onClick={handleDetails}>See Details</button>
        </div>
    )
}

MealItems.propTypes = {
    meals: PropTypes.object.isRequired,
}

export default MealItems