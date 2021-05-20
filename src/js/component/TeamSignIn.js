import React, { useContext, useState } from "react";
import imgAddTeam from "../../img/img-add-team.png";
import imgDelete from "../../img/img-delete.png";
import imgEdit from "../../img/img-edit.png";
import { Context } from "../store/appContext";
import { bounce, fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
	bounce01: {
		animation: "2s 1s",
		animationName: Radium.keyframes(bounce, "bounce01")
	},

	fadeInUp: {
		animation: "1s 0.5s",
		animationName: Radium.keyframes(fadeInUp, "fadeInUp")
	}
};

const TeamSignIn = () => {
	const initialState = { name: "", description: "", company_id: "" };
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
		if (datos.name.trim() === "" || datos.description.trim() === "") {
			setError(true);
			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroTeam(datos);
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						ADD TEAM
						<br />
					</div>
					<div className="nikollector-instructions-sections">
						It is time to add team(s) to your organization
						<br />
						<br />
						<form>
							<input
								type="text"
								className="form-control"
								name="name"
								onChange={handleChange}
								value={datos.name}
								placeholder="Name of the team/project"
							/>
							<br />
							<textarea
								name="description"
								onChange={handleChange}
								value={datos.description}
								placeholder="Description"
								wrap="off"
								cols="56"
								rows="5"
							/>
							<input
								type="text"
								placeholder="Company id"
								className="form-control"
								name="company_id"
								onChange={handleChange}
								value={datos.company_id}
							/>
							<br />
							<br />

							<button
								className="nikollector-button"
								onClick={() => {
									handleSubmit();
								}}>
								ADD TEAM!
							</button>

							{error ? <div>Please fill everything!</div> : null}
						</form>
						<br />
						<br />
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right">
						<StyleRoot>
							<img src={imgAddTeam} style={styles.fadeInUp} />
						</StyleRoot>
						<div className="nikollector-instructions-sections">
							Your added teams:
							<ul>
								<div id="rowTableAnimationSmall">
									{store.teams.map(team => (console.log(), <li>{team.id}</li>))}
								</div>
							</ul>
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamSignIn;
