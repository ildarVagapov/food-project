import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFilteredCategory } from "../api"
import { MealsList } from "../components/MealsList"
import { Preloader } from "../components/Preloader"


const Category = () => {
	const { name } = useParams()
	const [meals, setMeals] = useState([])
	useEffect(() => {
		getFilteredCategory(name).then((data) => {
			setMeals(data.meals)
		})
	}, [name])

	return (
		<>
			{
				meals.length ? <MealsList meals={meals} /> : <Preloader />
			}
		</>
	)
}

export { Category }