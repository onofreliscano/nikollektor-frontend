import React, { useContext, useState } from "react";
import nikolector from "../../img/nikolector.jpg";
import { Context } from "../store/appContext";
// import {store} from

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
		if (datos.name.trim() === "" || datos.description.trim() === "" || datos.company_id.trim() === "") {
			setError(true);

			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroTeam(datos);
		}
	};

	return (
		<div>
			<div className="containerPrincipal">
				<div className="mr-5">
					<img src={nikolector} />
				</div>
				<div className="containerSecundario">
					<h1>Registro</h1>
					<h2>Paso 1. Datos del equipo</h2>
					<p> Por favor especifica los datods del equipo para registrarlo en nuestra plataforma</p>
					<div className="form-group">
						<label>Nombre: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="name"
							onChange={handleChange}
							value={datos.name}
						/>
						<br />
						<label>Descripcion del equipo: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="description"
							onChange={handleChange}
							value={datos.description}
						/>
						<br />
						<label>ID de la Compañia: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="company_id"
							onChange={handleChange}
							value={datos.company_id}
						/>
						<br />

						<button
							className="btn btn-primary"
							onClick={() => {
								handleSubmit();
							}}>
							Registrarse
						</button>
						<br />
						{error ? <div>soy un error, todos los campos deben ser validos</div> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamSignIn;
