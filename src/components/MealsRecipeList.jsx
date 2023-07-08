import { MealsRecipeItem } from "./MealsRecipeItem"


const MealsRecipeList = (props) => {
	debugger
	return (
		<div className="list">
			{
				props.mealsRecipe.map((meal) => {
					return <MealsRecipeItem key={meal.idMeal} {...meal} />
				})
			}
		</div>
	)
}
export { MealsRecipeList }