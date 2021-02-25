import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Moodselection = () => {
	const initialState = { face_value: null, comment: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let date = new Date();
	let Year = date.getFullYear();
	let Month = date.getMonth();
	let Day = date.getDate();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = e => {
		console.log("enviamos formulario");
		setError(false);
		actions.registroMoods(datos);
		//  history.push("MoodHistory");
	};

	return (
		<div className="Container">
			<div className="titulos">
				<h1>Step 3/3 We are done! Lets do some M3.0</h1>
				<br />
				<h4>1)Whats your mood today?</h4>
				<Link to="MoodHistory">
					<button className="history"> History </button>
				</Link>
			</div>
			<div className="moods">
				<button
					className={datos.face_value == 5 ? "btn btn-primary" : "btn btn-outline-primary"}
					name="awesome"
					value={5}
					onClick={e =>
						setDatos({
							name: e.target.name,
							face_value: e.target.value
						})
					}>
					😀
				</button>
				<button
					className={datos.face_value == 4 ? "btn btn-primary" : "btn btn-outline-primary"}
					name="happy"
					value={4}
					onClick={e =>
						setDatos({
							name: e.target.name,
							face_value: e.target.value
						})
					}>
					😁
				</button>
				<button
					className={datos.face_value == 3 ? "btn btn-primary" : "btn btn-outline-primary"}
					name="neutral"
					value={3}
					onClick={e =>
						setDatos({
							name: e.target.name,
							face_value: e.target.value
						})
					}>
					😐
				</button>
				<button
					className={datos.face_value == 2 ? "btn btn-primary" : "btn btn-outline-primary"}
					name="sad"
					value={2}
					onClick={e =>
						setDatos({
							name: e.target.name,
							face_value: e.target.value
						})
					}>
					🙁
				</button>
				<button
					className={datos.face_value == 1 ? "btn btn-primary" : "btn btn-outline-primary"}
					name="angry"
					value={1}
					onClick={e =>
						setDatos({
							name: e.target.name,
							face_value: e.target.value
						})
					}>
					😡
				</button>
				{Day}/{Month + 1}/{Year}
				{
					<p>
						Your selection:
						{datos.name}
					</p>
				}
			</div>
			<div className="commentario">
				<h4>2)Why is that?</h4>
				<input
					name="comment"
					type="text"
					onChange={handleChange}
					placeholder="Explain your mood, so human resources can act"
					value={datos.comment}
				/>
			</div>
			<button
				className="btn btn-primary"
				onClick={() => {
					handleSubmit();
				}}>
				Submit
			</button>
			<br />
			{error ? <div>Soy un error</div> : null}
		</div>
	);
};

export default Moodselection;
