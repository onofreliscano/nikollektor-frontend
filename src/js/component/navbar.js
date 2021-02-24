import React from "react";
import { Link } from "react-router-dom";
import nikollectorLogo from "../../img/logo-nikollektor.png";

import { Animated } from "react-animated-css";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
	bounce: {
		animation: "x 1s",
		animationName: Radium.keyframes(bounce, "bounce")
	}
};

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light nikollector-navbar-main">
			<a className="navbar-brand" href="/">
				<StyleRoot>
					<img
						src={nikollectorLogo}
						height="auto"
						width="300px"
						className="img-fluid"
						style={styles.bounce}
					/>
				</StyleRoot>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="nav navbar-nav  ml-auto">
					<li className="nikollector-nav-item">
						<a className="nav-link" href="#">
							Info <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nikollector-nav-item">
						<a className="nav-link" href="#">
							Meet the Team
						</a>
					</li>
					<li className="nikollector-nav-item">
						<a className="nav-link" href="#">
							Guide
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
