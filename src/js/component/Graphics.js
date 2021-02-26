import React from "react";
import { Pie } from "react-chartjs-2";

const Graphic = props => {
	const data = {
		labels: ["Angry", "Sad", "Neutral", "Shocked", "Happy", "AWESOME!"],
		datasets: [
			{
				data: [5, 5, 5, 30, 20, 35],
				backgroundColor: [
					"rgba(241,62,61,1)",
					"rgba(234,92,102,1)",
					"rgba(250,132,50,1)",
					"rgba(254,210,49,1)",
					"rgba(42,230,135,1)",
					"rgba(34,168,49,1)"
				]
			}
		]
	};

	const opciones = {
		responsive: true
	};
	return (
		<div className="Grafica-pie">
			<Pie data={data} option={opciones} />
		</div>
	);
};

export default Graphic;
