import React, { useContext, useState } from "react";
import nikolector from "../../img/nikolector.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const initialState = { email: "", full_name: "", password: "", company_id: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		console.log(datos);
	};
	const handleSubmit = async e => {
		if (datos.email.trim() === "" || datos.password.trim() === "") {
			setError(true);
			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			let succes = await actions.login(datos);
			if (succes) {
				history.push("/Welcome");
			}
		}
	};

	return (
		<div>
			<div className="containerPrincipal">
				<div className="mr-5">
					<img src={nikolector} />
				</div>
				<div className="containerSecundario">
					<div className="form-group">
						<label>Email: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="email"
							onChange={handleChange}
							value={datos.email}
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

						<button
							className="btn btn-primary"
							onClick={() => {
								handleSubmit();
							}}>
							Iniciar Sesión
						</button>

						<br />
						{error ? <div>soy un error, todos los campos deben ser validos</div> : null}
						<div className="linea" />
						<br />
						<Link to="/selections">
							<button className="btn btn-primary">Registrate</button>
						</Link>
						<Link to="MoodSelection">
							<button className="btn btn-primary">Registra mood</button>
						</Link>
						<Link to="/Team-sign">
							<button className="btn btn-primary">Registra Equipo</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
