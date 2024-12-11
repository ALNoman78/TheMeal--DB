const NewData = ({data}) => {
    const {idMeal,strMealThumb , strMeal , strIngredient1 , strIngredient2 , strIngredient3 , strIngredient4} = data
    return (
        <div>
            <h3 className='font-medium text-lg'>Ingredients : </h3>
            <ul className='list-disc capitalize ml-5'>
                <li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
            </ul>
        </div>
    );
};

export default NewData;