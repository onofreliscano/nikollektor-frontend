import React from "react";
import nikolector from "../../img/nikolector.jpg";
import { Link } from "react-router-dom";

const CompanySign = () => (
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
					<Link to="/sign-in">
						<button className="btn btn-primary">Registrar compañia</button>
					</Link>
					<br />
				</div>
			</div>
		</div>
	</div>
);

export default CompanySign;
