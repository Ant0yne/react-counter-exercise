import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import vectorCalculatorIcon from "./assets/img/vectorCalculatorIcon.jpg";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header logo={vectorCalculatorIcon} />
			<Counter count={count} setCount={setCount} />
			<Footer />
		</>
	);
}

export default App;
