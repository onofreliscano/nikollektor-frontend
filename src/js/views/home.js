import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { bounce, fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import nikollectorImgHomeHero from "../../img/img-home-hero.png";
import nikollectorImgHomeToughts01 from "../../img/img-home-toughts-01.png";
import nikollectorImgHomeToughts02 from "../../img/img-home-toughts-02.png";
import nikollectorImgHomeToughts03 from "../../img/img-home-toughts-03.png";
import nikollectorImgBasedOn from "../../img/img-basedon.png";

const styles = {
	bounce: {
		animation: "2s 1s",
		animationName: Radium.keyframes(bounce, "bounce")
	},
	fadeInUpnikollectorImgHomeToughts01: {
		animation: "2.2s 1s linear infinite",
		width: 75 + "px",
		animationName: Radium.keyframes(fadeInUp, "fadeInUp")
	},
	fadeInUpnikollectorImgHomeToughts02: {
		animation: "2.6s 1s linear infinite",
		width: 80 + "px",
		animationName: Radium.keyframes(fadeInUp, "fadeInUp")
	},
	fadeInUpnikollectorImgHomeToughts03: {
		animation: "2.3s 1s linear infinite",
		width: 85 + "px",
		animationName: Radium.keyframes(fadeInUp, "fadeInUp")
	}
};

export const Home = () => {
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
		if (datos.email.trim() === "" || datos.password.trim() === "") {
			setError(true);

			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.Login(datos);
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						<StyleRoot>
							<div className="mr-5" style={styles.bounce}>
								Discover the wellness of your scrum team
								<br />
							</div>
						</StyleRoot>

						<div className="nikollector-form ">
							<input
								type="text"
								className="form-control"
								name="email"
								onChange={handleChange}
								value={datos.email}
								placeholder="email"
							/>

							<input
								type="password"
								className="form-control"
								name="password"
								onChange={handleChange}
								value={datos.password}
								placeholder="password"
							/>

							<button
								className="nikollector-button"
								onClick={() => {
									handleSubmit();
								}}>
								LOGIN
							</button>

							{error ? (
								<div className="nikollector-error-msg01">
									<br />
									email/password required to access!
									<br />
									Please fill them
								</div>
							) : null}

							<div className="linea" />
							<br />
							<Link to="/selections">
								<div className="nikollector-body-text">Not registered yet?</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right">
						<div id="rowTableAnimation">
							<div id="leftTableAnimation">
								<StyleRoot>
									<img
										src={nikollectorImgHomeToughts01}
										style={styles.fadeInUpnikollectorImgHomeToughts01}
									/>
									<h4 style={styles.fadeInUp} />
								</StyleRoot>
							</div>

							<div id="middleTableAnimation">
								<StyleRoot>
									<img
										src={nikollectorImgHomeToughts02}
										style={styles.fadeInUpnikollectorImgHomeToughts02}
									/>
									<h4 style={styles.fadeInUp} />
								</StyleRoot>
							</div>

							<div id="rightTableAnimation">
								<StyleRoot>
									<img
										src={nikollectorImgHomeToughts03}
										style={styles.fadeInUpnikollectorImgHomeToughts03}
									/>
								</StyleRoot>
							</div>
						</div>
						<img src={nikollectorImgHomeHero} className="img-home-hero" />
					</div>
				</div>
			</div>
			<div className="row">
				<img src={nikollectorImgBasedOn} className="img-based-on" />
			</div>
		</div>
	);
};
