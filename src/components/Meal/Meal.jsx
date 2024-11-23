import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import MealItems from './MealItems'

const Meal = () => {
    const meal = useLoaderData()
    const meals = meal.meals
    return (
        <div>
            {
                meals.map((items , idx) => <MealItems key={idx} meals={items}></MealItems>)
            }
        </div>
    )
}

Meal.propTypes = {}

export default Meal