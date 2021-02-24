import { name } from "file-loader";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const Moodselection = () => {
	const initialState = {};
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);

	let date = new Date(2021, 1, 23);
	let Year = date.getFullYear();
	let Month = date.getMonth();
	let Day = date.getDate();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		if (datos.name == "Awesome") {
			datos.value == 5;
			console.log(datos);
		} else if (datos.name == "Happy") {
			datos.value == 4;
			console.log(datos);
		} else if (datos.name == "Neutral") {
			datos.value == 3;
			console.log(datos);
		} else if (datos.name == "Sad") {
			datos.value == 2;
			console.log(datos);
		} else if (datos.name == "Angry") {
			datos.value == 1;
			console.log(datos);
		}
	};
	const handleSubmit = e => {
		if (datos.value == null) {
			setError(true);
			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroMoods(datos);
		}
	};

	return (
		<div className="Container">
			<div className="titulos">
				<h1>Step 3/3 We are done! Lets do some M3.0</h1>
				<br />
				<h4>1)Whats your mood today?</h4>
			</div>
			<div className="moods">
				<button className="btn btn-primary" name="Awesome" value={datos.Awesome} onClick={handleChange}>
					happy
				</button>
				<button className="btn btn-primary" name="Happy" value={datos.happy} onClick={handleChange}>
					happy-normal
				</button>
				<button className="btn btn-primary" name="Neutral" value={datos.Neutral} onClick={handleChange}>
					normal
				</button>
				<button className="btn btn-primary" name="Sad" value={datos.Sad} onClick={handleChange}>
					normal-sad
				</button>
				<button className="btn btn-primary" name="Angry" value={datos.Angry} onClick={handleChange}>
					sad
				</button>
				{Day}/{Month + 1}/{Year}
				{<p>Your selection:datos.name</p>}
			</div>
			<div className="comment">
				<h4>2)Why is that?</h4>
				<input name="comment" placeholder="Explain your mood, so human resources can act" />
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
