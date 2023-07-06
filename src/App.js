import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";

const App = () => {
	return (
		<div className="App">
			<Header />
			<main className="container content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/category/:name" element={<Category />} />
					<Route element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</div >
	);
}

export default App;
