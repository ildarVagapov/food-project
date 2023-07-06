import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<nav className="#3e2723 brown darken-4">
			<div className="nav-wrapper">
				<a href="!#" className="brand-logo">Shop</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export { Header }