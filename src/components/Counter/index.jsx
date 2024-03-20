import "./counter.css";

const Counter = ({ count, setCount }) => {
	return (
		<>
			<main>
				<div id="counter-buttons">
					<div className={`counter-symbole ${count <= 0 && "hidden"}`}>
						<button
							onClick={() => {
								count > 0 && setCount(count - 1);
							}}>
							-
						</button>
					</div>
					<div id="counter-number">
						<p>{count}</p>
					</div>
					<div className={`counter-symbole ${count >= 10 && "hidden"}`}>
						<button
							onClick={() => {
								count < 10 && setCount(count + 1);
							}}
							className={count >= 10 && "hidden"}>
							+
						</button>
					</div>
				</div>
				<button
					id="counter-reset"
					onClick={() => {
						count > 0 && setCount((count = 0));
					}}>
					Reset
				</button>
			</main>
		</>
	);
};

export default Counter;
