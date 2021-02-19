import React, { useContext, useState } from "react";
import nikolector from "../../img/nikolector.jpg";
import { Context } from "../store/appContext";
// import {store} from

const SignIn = () => {
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
		if (
			datos.email.trim() === "" ||
			datos.full_name.trim() === "" ||
			datos.password.trim() === "" ||
			datos.company_id.trim() === ""
		) {
			setError(true);

			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroManager(datos);
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
					<h2>Paso 3. Datos del gerente de RRHH</h2>
					<p> Por favor especifica tus datos para registrarte en nuestra plataforma</p>
					<div className="form-group">
						<label>Correo electrónico:</label>
						<br />
						<input
							type="text"
							className="form-control"
							name="email"
							onChange={handleChange}
							value={datos.email}
						/>
						<br />
						<label>Nombre: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="full_name"
							onChange={handleChange}
							value={datos.full_name}
						/>
						<br />

						<label>Contraseña: </label>
						<br />
						<input
							type="password"
							className="form-control"
							name="password"
							onChange={handleChange}
							value={datos.password}
						/>
						<br />
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

export default SignIn;
