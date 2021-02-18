import React from "react";
import nikolector from "../../img/nikolector.jpg";
import { Link } from "react-router-dom";

export const Company_S_I = () => (
	<div>
		<div className="containerPrincipal">
			<div className="mr-5">
				<img src={nikolector} />
			</div>
			<div className="containerSecundario">
				<h1>Registro</h1>
				<h2>Paso 2. Datos de la compania</h2>
				<p> Por favor especifica los datos de la compania que deseas registrar</p>
				<div className="form-group">
					<label>Nombre de la compania </label>
					<br />
					<input type="text" className="form-control" name="username" />
					<br />
					<label>logo: </label>
					<br />
					<input type="password" className="form-control" name="password" />
					<br />
					<label>Pais:</label>
					<br />
					<input type="text" className="form-control" name="email" />
					<br />
					<label>Ciudad: </label>
					<br />
					<input type="text" className="form-control" name="company" />
					<br />
					<label>Identificador: </label>
					<input type="text" className="form-control" name="company" />
					<br />
					<Link to="/Sign_In">
						<button className="btn btn-primary">Registrar compania</button>
					</Link>
					<br />
				</div>
			</div>
		</div>
	</div>
);
