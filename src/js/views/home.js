import React from "react";
import nikolector from "../../img/nikolector.jpg";
import "../../styles/home.scss";

export const Home = () => (
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
					<button className="btn btn-primary">Iniciar Sesión</button>
				</div>
			</div>
		</div>
	</div>
);
