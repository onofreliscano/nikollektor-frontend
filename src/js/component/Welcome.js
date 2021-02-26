import React, { useContext, useState } from "react";
import nikollectorImgStep3Thinking from "../../img/img-step3-thinking.png";
import { Context } from "../store/appContext";
import { bounce, fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link, useHistory, Redirect } from "react-router-dom";
import nikollectorImgWelcomeOpt01 from "../../img/img-welcome-opt01.png";
import nikollectorImgWelcomeOpt02 from "../../img/img-welcome-opt02.png";
import nikollectorImgWelcomeOpt03 from "../../img/img-welcome-opt03.png";
import nikollectorImgWelcomePeople from "../../img/img-welcome-people.png";
import { get } from "jquery";

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

const Welcome = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{store.jwt && store.is_manager ? (
				<div>
					<div className="row">
						<div className="col-sm">
							<div className="nikollector-container-home-left">
								WELCOME!
								<br />
								<div className="nikollector-subtitles-sections">
									Human Resources turns on the SCRUM party{" "}
								</div>
							</div>
							<div className="nikollector-instructions-sections">
								Please select what you want to do:
								<br />
								<br />
							</div>
						</div>
						<div className="col-sm">
							<div className="nikollector-container-home-right" />
						</div>
					</div>
					<div className="row nikollector-welcome-center row">
						<div id="rowTableAnimation">
							<div id="leftTableAnimation">
								<StyleRoot>
									<Link to="/TeamSignIn">
										<img src={nikollectorImgWelcomeOpt01} style={styles.bounce01} />
									</Link>
								</StyleRoot>
							</div>

							<div id="middleTableAnimation">
								<StyleRoot>
									<Link to="HumanTsign">
										<img src={nikollectorImgWelcomeOpt02} style={styles.bounce02} />
									</Link>
								</StyleRoot>
							</div>

							<div id="rightTableAnimation">
								<StyleRoot>
									<Link to="/Dashboards">
										<img src={nikollectorImgWelcomeOpt03} style={styles.bounce03} />
									</Link>
								</StyleRoot>
							</div>
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
			) : (
				<Redirect to="/MoodSelection" />
			)}
		</div>
	);
};

export default Welcome;
