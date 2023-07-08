import { Meals } from "./Meals"


const MealsList = (props) => {
	return (
		<div className="list">
			{
				props.meals.map((meal) => {
					return (
						<Meals key={meal.idMeal}  {...meal} />
					)
				})
			}
		</div>
	)
}

export { MealsList }