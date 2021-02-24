/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import nikollectorImgStep1Girls from "../../img/img-step1-girls.png";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const Election = () => {
	const [rol, setRol] = useState("");
	let history = useHistory();
	const onValueChange = e => {
		setRol(e.target.value);
	};
	const formSubmit = () => {
		if (rol === "Human-Talent") {
			history.push("/human-talent-sign");
		} else {
			history.push("/company-sign");
		}
	};

	const styles = {
		fadeInDown: {
			animation: "1s 0.5s",
			animationName: Radium.keyframes(fadeInDown, "fadeInDown")
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						STEP 1/3
						<br />
						<div className="nikollector-subtitles-sections">Choose your side</div>
					</div>
					<div className="nikollector-instructions-sections">
						What´s your role in your company?
						<br />
						Please select one: <br />
						<br />
						<form>
							<label>
								<input
									name="radio"
									id="radio1"
									type="radio"
									value="HR-Manager"
									onChange={onValueChange}
								/>
								<b>HR Manager</b>
							</label>
							<br />
							<label>
								<input
									name="radio"
									id="radio2"
									type="radio"
									value="Human-Talent"
									onChange={onValueChange}
								/>
								<b>Human Talent</b>
							</label>
							<br />
							<br />
							<div> {"You selected: " + rol}</div>
							<br />

							<button className="nikollector-button" onClick={formSubmit}>
								LETS CONTINUE
							</button>
						</form>
						<br />
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right">
						<br />

						<StyleRoot>
							<img src={nikollectorImgStep1Girls} style={styles.fadeInDown} />
						</StyleRoot>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Election;
