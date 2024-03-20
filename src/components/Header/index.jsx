import "./header.css";

const Header = ({ logo }) => {
	console.log(logo);
	return (
		<>
			<header>
				<img src={logo} alt="calculatrice" />
				<h1>React Counter</h1>
			</header>
		</>
	);
};

export default Header;
