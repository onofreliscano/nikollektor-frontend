/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import nikolector from "../../img/nikolector.jpg";
import { Link } from "react-router-dom";

class Election extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "Human_talent" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert("Eres: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<div className="mr-5">
					<img src={nikolector} />
				</div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Selecciona tu rol en la compania:
						<br />
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="HRManager">Manager de recursos humanos</option>
							<option value="Human_talent">Talento Humano</option>
						</select>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
export default Election;
