import React, { useContext, useState } from "react";
import nikollectorImgStep3Thinking from "../../img/img-step3-thinking.png";
import { Context } from "../store/appContext";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link, useHistory } from "react-router-dom";

// import {store} from

const styles = {
	fadeInDown: {
		animation: "1s 0.5s",
		animationName: Radium.keyframes(fadeInDown, "fadeInDown")
	}
};

const Welcome = () => {
	const initialState = { email: "", full_name: "", password: "", company_id: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		console.log(datos);
	};
	const handleSubmit = async e => {
		if (
			datos.email.trim() === "" ||
			datos.full_name.trim() === "" ||
			datos.password.trim() === ""
			// datos.password.trim() === "" ||
			// datos.company_id.trim() === ""
		) {
			setError(true);
		} else {
			console.log("enviamos formulario");
			setError(false);
			let success = await actions.registroManager(datos);
			if (success) {
				history.push("/");
			} else {
				alert("NOT!");
			}
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">LEFT</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right">RIGHT</div>
				</div>
			</div>
			<div className="row">BOTTOM</div>
		</div>
	);
};

export default Welcome;
