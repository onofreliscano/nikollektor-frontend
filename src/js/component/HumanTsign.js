import React, { useContext, useState } from "react";
import nikollectorImgStep2TalentCouple from "../../img/img-step2-talent-couple.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
	fadeInDown: {
		animation: "1s 0.5s",
		animationName: Radium.keyframes(fadeInDown, "fadeInDown")
	}
};

const HumanTsign = () => {
	const initialState = { email: "", full_name: "", password: "", img_url: "", team_id: "" };
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
			datos.img_url.trim() === ""
		) {
			setError(true);
			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroHumanTalent(datos);
			// history.push("/moodSelection");
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						STEP 2/3
						<br />
						<div className="nikollector-subtitles-sections">As a human talent, lets know about you</div>
						<div className="nikollector-form">
							<form>
								<input
									type="text"
									// className="form-control"
									name="email"
									onChange={handleChange}
									value={datos.email}
									placeholder="email"
								/>
								<input
									type="text"
									// className="form-control"
									name="full_name"
									onChange={handleChange}
									value={datos.full_name}
									placeholder="your name"
								/>
								<input
									type="password"
									// className="form-control"
									name="password"
									onChange={handleChange}
									value={datos.password}
									placeholder="password"
								/>
								<input
									type="text"
									// className="form-control"
									name="img_url"
									onChange={handleChange}
									value={datos.img_url}
									placeholder="Image"
								/>
								<input
									type="text"
									// className="form-control"
									name="team_id"
									onChange={handleChange}
									value={datos.team_id}
									placeholder="team you belong"
								/>

								<button
									// className="nikollector-button"
									onClick={() => {
										handleSubmit();
									}}>
									ADD ME!
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
							<img src={nikollectorImgStep2TalentCouple} style={styles.fadeInDown} />
						</StyleRoot>
					</div>
				</div>
			</div>
			<div className="row" />
		</div>
	);
};

export default HumanTsign;
