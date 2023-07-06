import { Link } from "react-router-dom"

const Meals = (props) => {
	debugger

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={props.strMealThumb} alt={props.strMeal} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{props.strMeal}</span>
			</div>
			<div className='card-action'>
				<Link to={``} className='btn'>
					Watch category
				</Link>
			</div>
		</div >
	)
}

export { Meals }