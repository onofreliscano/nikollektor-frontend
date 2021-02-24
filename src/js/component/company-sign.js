import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import nikollectorImgStep2Three from "../../img/img-step2-three.png";

const styles = {
	fadeInDown: {
		animation: "1s 0.5s",
		animationName: Radium.keyframes(fadeInDown, "fadeInDown")
	}
};

const CompanySign = () => {
	const initialState = { image: "", name: "", country: "", city: "", identifier: "" };
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
			datos.image.trim() === "" ||
			datos.name.trim() === "" ||
			datos.country.trim() === "" ||
			datos.city.trim() === "" ||
			datos.identifier.trim() === ""
		) {
			setError(true);

			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroCompany(datos);
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						STEP 2/3
						<br />
						<div className="nikollector-subtitles-sections">Let us know about the company you work for</div>
						<div className="nikollector-form">
							<form>
								<input
									type="text"
									className="form-control"
									name="name"
									onChange={handleChange}
									value={datos.name}
									placeholder="company's name"
								/>
								<input
									type="text"
									className="form-control"
									name="image"
									onChange={handleChange}
									value={datos.image}
									placeholder="logo's company"
								/>
								<input
									type="text"
									className="form-control"
									name="country"
									onChange={handleChange}
									value={datos.country}
									placeholder="country"
								/>
								<input
									type="text"
									className="form-control"
									name="city"
									onChange={handleChange}
									value={datos.city}
									placeholder="city"
								/>
								<input
									type="text"
									className="form-control"
									name="identifier"
									onChange={handleChange}
									value={datos.identifier}
									placeholder="EIN (E.E.U.U) / RIF (Venezuela)"
								/>
								<Link to="/sign-in">
									<button
										className="nikollector-button"
										onClick={() => {
											handleSubmit();
										}}>
										REGISTER THIS COMPANY
									</button>
								</Link>
							</form>
						</div>
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right">
						<StyleRoot>
							<img src={nikollectorImgStep2Three} style={styles.fadeInDown} />
						</StyleRoot>
					</div>
				</div>
			</div>
			<div className="row" />
		</div>
	);
};

export default CompanySign;
