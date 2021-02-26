import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import mood01 from "../../img/img-mood-01.png";
import mood02 from "../../img/img-mood-02.png";
import mood03 from "../../img/img-mood-03.png";
import mood04 from "../../img/img-mood-04.png";
import mood05 from "../../img/img-mood-05.png";
import mood06 from "../../img/img-mood-06.png";
import moodHistoric from "../../img/img-mood-historic.png";

import { bounce, fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
	bounce01: {
		animation: "2s 0.5s",
		animationName: Radium.keyframes(bounce, "bounce01")
	},
	bounce02: {
		animation: "3s 1s",
		animationName: Radium.keyframes(bounce, "bounce02")
	},
	bounce03: {
		animation: "4s 1.5s",
		animationName: Radium.keyframes(bounce, "bounce03")
	},
	bounce03: {
		animation: "4s 2s",
		animationName: Radium.keyframes(bounce, "bounce03")
	},
	bounce04: {
		animation: "5s 1s",
		animationName: Radium.keyframes(bounce, "bounce04")
	},
	bounce05: {
		animation: "6s 1s",
		animationName: Radium.keyframes(bounce, "bounce05")
	},
	bounce06: {
		animation: "7s 1s",
		animationName: Radium.keyframes(bounce, "bounce06")
	}
};

const Moodselection = () => {
	const initialState = { face_value: null, comment: "", name: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let date = new Date();
	let Year = date.getFullYear();
	let Month = date.getMonth();
	let Day = date.getDate();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = e => {
		console.log("enviamos formulario");
		setError(false);
		actions.registroMoods(datos);
		//  history.push("MoodHistory");
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						STEP 3/3
						<br />
						<div className="nikollector-subtitles-sections">
							We are done!
							<br />
							Lets do some M3.0
						</div>
					</div>
					<div className="nikollector-instructions-sections">
						1) What is your mood today?
						<br />
						<br />
						<div className="divMoodScale">
							<div className="divTable">
								<div className="divTableBody">
									<div className="divTableRow">
										<div className="divTableCell">
											<button
												className={
													datos.face_value == 5
														? "btn btn-primary"
														: "btn btn-outline-primary"
												}
												name="angry"
												value={1}
												onClick={e =>
													setDatos({
														name: e.target.name,
														face_value: e.target.value
													})
												}>
												<StyleRoot>
													<img src={mood01} className="moodIcon" style={styles.bounce01} />
												</StyleRoot>
											</button>
										</div>
										<div className="divTableCell">
											<button
												className={
													datos.face_value == 4
														? "btn btn-primary"
														: "btn btn-outline-primary"
												}
												name="sad"
												value={2}
												onClick={e =>
													setDatos({
														name: e.target.name,
														face_value: e.target.value
													})
												}>
												<StyleRoot>
													<img src={mood02} className="moodIcon" style={styles.bounce02} />
												</StyleRoot>
											</button>
										</div>
										<div className="divTableCell">
											<button
												className={
													datos.face_value == 3
														? "btn btn-primary"
														: "btn btn-outline-primary"
												}
												name="neutral"
												value={3}
												onClick={e =>
													setDatos({
														name: e.target.name,
														face_value: e.target.value
													})
												}>
												<StyleRoot>
													<img src={mood03} className="moodIcon" style={styles.bounce03} />
												</StyleRoot>
											</button>
										</div>
										<div className="divTableCell">
											<button
												className={
													datos.face_value == 2
														? "btn btn-primary"
														: "btn btn-outline-primary"
												}
												name="happy"
												value={4}
												onClick={e =>
													setDatos({
														name: e.target.name,
														face_value: e.target.value
													})
												}>
												<StyleRoot>
													<img src={mood04} className="moodIcon" style={styles.bounce04} />
												</StyleRoot>
											</button>
										</div>

										<div className="divTableCell">
											<button
												className={
													datos.face_value == 1
														? "btn btn-primary"
														: "btn btn-outline-primary"
												}
												name="awesome"
												value={5}
												onClick={e =>
													setDatos({
														name: e.target.name,
														face_value: e.target.value
													})
												}>
												<StyleRoot>
													<img src={mood06} className="moodIcon" style={styles.bounce06} />
												</StyleRoot>
											</button>
										</div>
										<div className="divTableCellText">
											FEB, 26th 2021
											<br />
											Your Selection:
											{datos.name}
											<br />
										</div>
									</div>
								</div>
							</div>
						</div>
						<br />
						<br />
						2. Why is that?
						<br />
						<br />
						<textarea
							name="description"
							onChange={handleChange}
							value={datos.comment}
							placeholder="Explain your mood, so human resources can act and help you"
							wrap="off"
							cols="70"
							rows="5"
						/>
						<br />
						<br />
						<Link to="Farewell">
							<button
								className="nikollector-button"
								onClick={() => {
									handleSubmit();
								}}>
								Submit
							</button>
						</Link>
						<br />
						{error ? <div>Soy un error</div> : null}
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right">
						<Link to="MoodHistory">
							<img src={moodHistoric} />{" "}
						</Link>
					</div>
				</div>
			</div>
			<div className="row nikollector-welcome-center row">
				<div id="rowTableAnimation">
					<div id="leftTableAnimation" />

					<div id="middleTableAnimation" />

					<div id="rightTableAnimation" />
				</div>
			</div>
			<div className="row nikollector-welcome-center">
				<div id="rowTableAnimation">
					<div id="leftTableAnimation" />
				</div>
			</div>
		</div>
	);
};

export default Moodselection;
