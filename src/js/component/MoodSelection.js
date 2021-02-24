import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const Moodselection = () => {
	const initialState = { face_value: "", comment: "" };
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
		console.log(datos);
		if (datos.name == "Angry") {
			faceAngry == datos.face_value;
		}
		// if (datos.name == "Happy") {
		// 	datos.face_value == 4;
		// } else if (datos.name == "Neutral") {
		// 	datos.face_value == 3;
		// } else if (datos.name == "Sad") {
		// 	datos.face_value == 2;
		// } else if (datos.name == "Angry") {
		// 	datos.face_value == 1;
		// }
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
				<button
					className="btn btn-primary"
					key="valor1"
					name="Awesome"
					value={(datos.faceAwesome = 1)}
					onClick={handleChange}>
					Awesome
				</button>
				<button
					className="btn btn-primary"
					key="valor2"
					name="Happy"
					value={(datos.faceHappy = 2)}
					onClick={handleChange}>
					Happy
				</button>
				<button
					className="btn btn-primary"
					key="valor3"
					name="Neutral"
					// value={datos.face_value}
					value={(datos.faceNeutral = 3)}
					onClick={handleChange}>
					Neutral
				</button>
				<button
					className="btn btn-primary"
					key="valor4"
					name="Sad"
					value={(datos.faceSad = 4)}
					onClick={handleChange}>
					Sad
				</button>
				<button
					className="btn btn-primary"
					key="valor5"
					name="Angry"
					value={(datos.faceAngry = 5)}
					onClick={handleChange}>
					Angry
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
