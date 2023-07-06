import { CategoryItem } from "./CategoryItem"

const CategoryList = (props) => {
	return (
		<div className="list">
			{props.category.map((el) => (
				< CategoryItem key={el.idCategory} {...el} />
			))}
		</div>
	)
}

export { CategoryList }