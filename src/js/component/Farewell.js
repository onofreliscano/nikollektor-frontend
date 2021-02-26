import React, { useContext, useState } from "react";
import nikollectorImgStep3Thinking from "../../img/img-step3-thinking.png";
import { Context } from "../store/appContext";
import { bounce, fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link, useHistory } from "react-router-dom";
import nikollectorImgWelcomeOpt01 from "../../img/img-welcome-opt01.png";
import nikollectorImgWelcomeOpt02 from "../../img/img-welcome-opt02.png";
import nikollectorImgWelcomeOpt03 from "../../img/img-welcome-opt03.png";
import nikollectorImgWelcomePeople from "../../img/img-welcome-people.png";

const styles = {
	bounce01: {
		animation: "2s 1s",
		animationName: Radium.keyframes(bounce, "bounce01")
	},
	bounce02: {
		animation: "3s 1s",
		animationName: Radium.keyframes(bounce, "bounce02")
	},
	bounce03: {
		animation: "4s 1s",
		animationName: Radium.keyframes(bounce, "bounce03")
	},
	fadeInUp: {
		animation: "1s 0.5s",
		animationName: Radium.keyframes(fadeInUp, "fadeInUp")
	}
};

const Farewell = () => {
	const initialState = { email: "", full_name: "", password: "", company_id: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	// const [img, setImage] = useState({ nikollectorImgWelcomePeople });

	// const handleImage = e => {
	// 	setImage({
	// 		img.
	// 	});
	// };

	// function handleChange() {
	// 	setImage({ nikollectorImgWelcomeOpt01 });
	// }

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
					<div className="nikollector-container-home-left">
						THANKS!
						<br />
						<div className="nikollector-subtitles-sections">
							We know how you fell!
							<br />
							YOu are important to us!
						</div>
					</div>
					<div className="nikollector-instructions-sections">
						If you want to contact our Human Resources Department please keep in touch with:
						<br />
						<br />
						<br />
						ONOFRE LISCANO
						<br />
						<br />
						Human Resources Manager
						<br />
						Caracas, Venezuela
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right" />
				</div>
			</div>

			<div className="row nikollector-welcome-center">
				<div id="rowTableAnimation">
					<div id="leftTableAnimation">
						<StyleRoot>
							<img src={nikollectorImgWelcomePeople} style={styles.fadeInUp} />
						</StyleRoot>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Farewell;
