/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import nikolector from "../../img/nikolector.jpg";
import { useHistory } from "react-router-dom";

const Selection = () => {
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

	return (
		<div className="containerPrincipal">
			<div className="mr-5">
				<img src={nikolector} />
			</div>
			<form>
				<div className="containerSecundario">
					<div className="titles">
						<h1>Registro</h1>
						<h2>Paso 1</h2>
					</div>
					<div className="parrafo">
						<p>
							Bienvenido a nikolector, para que podemos brindarte nuestros servicios primero debes
							seleccionar una de estas opciones para empezar el registro.
							<br />
							Que rol cumples en tu compañia?
						</p>
					</div>
					<div className="radio">
						<label>
							<input type="radio" value="HR-Manager" onChange={onValueChange} />
							<b>Manager de RRHH</b>
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" value="Human-Talent" onChange={onValueChange} />
							<b>Talento Humano</b>
						</label>
					</div>
					<div>Seleccionaste : {rol}</div>
					<button className="btn btn-primary" onClick={formSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Selection;
