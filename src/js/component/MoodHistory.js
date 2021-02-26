import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const MoodHistory = () => {
	const initialState = { };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);

	const average = async e => {
		let success = await actions.registroManager(datos);
		if (success) {
			history.push("/");
		} else {
			alert("NOT!");
		}
		setDatos({
			name: e.target.name,
			face_value: e.target.value
		});
		if (datos.face_value == 121 - 150) {
			face.average = "Awesome";
			face.message = "Keep on that mood";
		}
		if (datos.face_value == 91 - 120) {
			face.average = "happy";
			face.message = "Thats the attitude";
		}
		if (datos.face_value == 61 - 90) {
			face.average = "Neutral";
			face.message = "Some apathy,lets talk";
		}
		if (datos.face_value == 31 - 60) {
			face.average = "Sad";
			face.message = "You should get help";
		}
		if (datos.face_value == 0 - 30) {
			face.average = "Angry";
			face.message = "You should get some gelp immediatly";
		}
	};

	return (
		<div>
			<div className="titulos">
				<h2>Your mood Historical</h2>
				<br />
				<p>This is how you have been feeling doing during all this time</p>
				<br />
				<div>
					{/* {human_talen.id} */}
					<p>Your average is:</p>
					{datos.face.average}
					{datos.face.message}
				</div>
			</div>
		</div>
	);
};

export default MoodHistory;
