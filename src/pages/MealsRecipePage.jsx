import { useEffect, useState } from "react"
import { getMealById } from "../api"
import { useParams, useNavigate } from "react-router-dom"
import { Preloader } from "../components/Preloader"
import { MealsRecipeList } from "../components/MealsRecipeList"


const MealsRecipePage = () => {

	const goBack = useNavigate()

	const { id } = useParams()

	const [mealsRecipe, setMealsRecipe] = useState([])

	useEffect(() => {
		getMealById(id).then((data) => {
			setMealsRecipe(data.meals)
			console.log(data)
		})
	}, [id])

	return (
		<>
			{
				mealsRecipe.length ? <MealsRecipeList mealsRecipe={mealsRecipe} /> : <Preloader />
			}
			<button class="btn" onClick={() => goBack((-1))}>Назад</button>
		</>
	)
}

export { MealsRecipePage }