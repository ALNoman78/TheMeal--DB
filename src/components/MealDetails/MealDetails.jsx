import { useLoaderData, useNavigate } from 'react-router-dom'
import NewData from '../NewData/NewData'

const MealDetails = () => {
    const ingredient = useLoaderData()
    const int = ingredient.meals
    const navigator = useNavigate()

    const handleBack = () => {
        navigator(-1)
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                {
                    int.map((x, i) => <NewData key={i} data={x}></NewData>)
                }
            </div>
            <button className='btn' onClick={handleBack}> Back</button>
        </div>
    )
}

MealDetails.propTypes = {}

export default MealDetails