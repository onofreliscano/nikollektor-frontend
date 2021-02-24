import React, { useContext, useState } from "react";
import nikollectorImgStep3Thinking from "../../img/img-step3-thinking.png";
import { Context } from "../store/appContext";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
// import {store} from

const styles = {
	fadeInDown: {
		animation: "1s 0.5s",
		animationName: Radium.keyframes(fadeInDown, "fadeInDown")
	}
};

const SignIn = () => {
	const initialState = { email: "", full_name: "", password: "", company_id: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		console.log(datos);
	};
	const handleSubmit = e => {
		if (
			datos.email.trim() === "" ||
			datos.full_name.trim() === "" ||
			datos.password.trim() === "" ||
			datos.company_id.trim() === ""
		) {
			setError(true);

			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroManager(datos);
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						STEP 3/3
						<br />
						<div className="nikollector-subtitles-sections">Now...let us know about you!</div>
						<div className="nikollector-form">
							<form>
								<input
									type="text"
									className="form-control"
									name="full_name"
									onChange={handleChange}
									value={datos.full_name}
									placeholder="your name"
								/>
								<input
									type="text"
									className="form-control"
									name="email"
									onChange={handleChange}
									value={datos.email}
									placeholder="your email"
								/>
								<input
									type="password"
									className="form-control"
									name="password"
									onChange={handleChange}
									value={datos.password}
									placeholder="password (this is temporary)"
								/>
								<input
									type="number"
									className="form-control"
									name="company_id"
									onChange={handleChange}
									value={datos.company_id}
									placeholder="company ID (this is temporary)"
								/>
								<button
									className="nikollector-button"
									onClick={() => {
										handleSubmit();
									}}>
									TAKE ME 2 THE PARTY!
								</button>
								<br />
								{error ? <div>soy un error, todos los campos deben ser validos</div> : null}
							</form>
						</div>
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right">
						<StyleRoot>
							<img src={nikollectorImgStep3Thinking} style={styles.fadeInDown} />
						</StyleRoot>
					</div>
				</div>
			</div>
			<div className="row" />
		</div>
	);
};

export default SignIn;
