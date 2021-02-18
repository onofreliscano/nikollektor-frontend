import React from "react";
import nikolector from "../../img/nikolector.jpg";
import { Link } from "react-router-dom";

export const HumanT_S_I = () => (
	<div>
		<div className="containerPrincipal">
			<div className="mr-5">
				<img src={nikolector} />
			</div>
			<div className="containerSecundario">
				<h1>Registro</h1>
				<h2>Paso 2. Datos del talento humano</h2>
				<p> Por favor especifica tus datos para registrarte en nuestra plataforma</p>
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
					<label>ID de equipo: </label>
					<br />
					<input type="text" className="form-control" name="Team_id" />
					<br />
					<button className="btn btn-primary">Registrarse</button>
					<br />
				</div>
			</div>
		</div>
	</div>
);
