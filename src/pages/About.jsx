import { useNavigate } from "react-router-dom"

const About = () => {
	const goBack = useNavigate()

	return (
		<>
			<h1>About</h1>
			<button class="btn" onClick={() => goBack((-1))}>Назад</button>
		</>
	)
}

export { About }