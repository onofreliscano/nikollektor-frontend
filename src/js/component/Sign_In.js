import React from "react";
import nikolector from "../../img/nikolector.jpg";
import { Link } from "react-router-dom";

export const Sign_In = () => (
	<div>
		<div className="containerPrincipal">
			<div className="mr-5">
				<img src={nikolector} />
			</div>
			<div className="containerSecundario">
				<div className="form-group">
					<label>Usuario: </label>
					<br />
					<input type="text" className="form-control" name="username" />
					<br />
					<label>Contraseña: </label>
					<br />
					<input type="password" className="form-control" name="password" />
					<br />
					<label>Correo electrónico:</label>
					<br />
					<input type="text" className="form-control" name="email" />
					<br />
					<label>Empresa: </label>
					<br />
					<input type="text" className="form-control" name="company" />
					<br />
					<label>Compañia ID: </label>
					<br />
					<input type="text" className="form-control" name="company_id" />
					<br />
					<label>País: </label>
					<br />
					<input type="text" className="form-control" name="country" />
					<br />
					<label>Ciudad: </label>
					<br />
					<input type="text" className="form-control" name="city" />
					<br />
					<button className="btn btn-primary">Registrarse</button>
					<br />
				</div>
			</div>
		</div>
	</div>
);
