
const MealsRecipeItem = (props) => {
	return (
		<div className='meals-recipe'>
			<div className='card-image'>
				<img src={props.strMealThumb} alt={props.strMeal} />
			</div>
			<div className='card-content '>
				<h5 className='card-title meals-title'>{props.strCategory}</h5>
				<p className="meals-des">{props.strInstructions.slice(0, 600)}...</p>
			</div>
			<div className='card-action'>
			</div>
		</div>
	)
}

export { MealsRecipeItem } 