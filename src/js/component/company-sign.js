import React, { useContext, useState } from "react";
import nikolector from "../../img/nikolector.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
		<div>
			<div className="containerPrincipal">
				<div className="mr-5">
					<img src={nikolector} />
				</div>
				<div className="containerSecundario">
					<h1>Registro</h1>
					<h2>Paso 2. Datos de la compañia</h2>
					<p> Por favor especifica los datos de la compañia que deseas registrar</p>
					<div className="form-group">
						<label>Nombre de la compañia </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="name"
							onChange={handleChange}
							value={datos.name}
						/>
						<br />
						<label>logo: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="image"
							onChange={handleChange}
							value={datos.image}
						/>
						<br />
						<label>Pais:</label>
						<br />
						<input
							type="text"
							className="form-control"
							name="country"
							onChange={handleChange}
							value={datos.country}
						/>
						<br />
						<label>Ciudad: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="city"
							onChange={handleChange}
							value={datos.city}
						/>
						<br />
						<label>Identificador: </label>
						<input
							type="text"
							className="form-control"
							name="identifier"
							onChange={handleChange}
							value={datos.identifier}
						/>
						<br />
						<Link to="/sign-in">
							<button
								className="btn btn-primary"
								onClick={() => {
									handleSubmit();
								}}>
								Registrar compañia
							</button>
						</Link>
						<br />
						{error ? <div>soy un error, todos los campos deben ser validos</div> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanySign;
