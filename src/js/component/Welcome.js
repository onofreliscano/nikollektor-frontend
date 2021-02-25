import React, { useContext, useState } from "react";
import nikolector from "../../img/nikolector.jpg";
import { Link, Redirect } from "react-router-dom";
import { Navbar } from "./navbar";
import { Context } from "../store/appContext";

const Welcome = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="row">
				{store.jwt && store.is_manager ? (
					<div className="container">
						<h1>Welcome!</h1>
						<br />
						<h1>Time to play</h1>
						<br />
						<h3>Select what you want to do</h3>
						<br />
						<Link to="/Team-sign">
							<button className="btn btn-primary">Add teams</button>
						</Link>
						<Link to="/Farewell">
							<button className="btn btn-primary">chao</button>
						</Link>
						<Link to="/human-talent-sign">
							<button className="btn btn-primary">Add Human Talent</button>
						</Link>
						<Link to="/Dashboards">
							<button className="btn btn-primary">Dashboards</button>
						</Link>
						<div className="mr-5">
							<img src={nikolector} />
						</div>
					</div>
				) : (
					<Redirect to="/MoodSelection" />
				)}
			</div>
		</div>
	);
};

export default Welcome;
