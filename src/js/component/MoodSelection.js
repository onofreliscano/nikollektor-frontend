import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const Moodselection = () => {
	const initialState = { face_value: null, comment: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	let date = new Date();
	let Year = date.getFullYear();
	let Month = date.getMonth();
	let Day = date.getDate();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		console.log(datos);
		if (datos.name == "Awesome") {
			datos.face_value == 5;
		}
		if (datos.name == "Happy") {
			datos.face_value == 4;
		} else if (datos.name == "Neutral") {
			datos.face_value == 3;
		} else if (datos.name == "Sad") {
			datos.face_value == 2;
		} else if (datos.name == "Angry") {
			datos.face_value == 1;
		}
	};
	const handleSubmit = e => {
		console.log("enviamos formulario");
		setError(false);
		actions.registroMoods(datos);
	};

	return (
		<div className="Container">
			<div className="titulos">
				<h1>Step 3/3 We are done! Lets do some M3.0</h1>
				<br />
				<h4>1)Whats your mood today?</h4>
			</div>
			<div className="moods">
				<button className="btn btn-primary" name="Awesome" value={datos.face_value} onClick={handleChange}>
					😀
				</button>
				<button className="btn btn-primary" name="Happy" value={datos.face_value} onClick={handleChange}>
					😁
				</button>
				<button className="btn btn-primary" name="Neutral" value={datos.face_value} onClick={handleChange}>
					😐
				</button>
				<button className="btn btn-primary" name="Sad" value={datos.face_value} onClick={handleChange}>
					🙁
				</button>
				<button className="btn btn-primary" name="Angry" value={datos.face_value} onClick={handleChange}>
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
			<div className="comment">
				<h4>2)Why is that?</h4>
				<input
					name="comment"
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
