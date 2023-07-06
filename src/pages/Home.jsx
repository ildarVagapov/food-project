import { useEffect, useState } from "react"
import { getAllCategories } from "../api"
import { Preloader } from "../components/Preloader"
import { CategoryList } from "../components/CategoryList"

const Home = () => {
	const [category, setCategory] = useState([])
	useEffect(() => {
		getAllCategories().then((data) => {
			setCategory(data.categories)
		})
	}, [])

	return (
		<>
			{
				category.length ? <CategoryList category={category} /> : < Preloader />
			}
		</>
	)
}

export { Home }