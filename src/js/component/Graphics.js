import React from "react";
import { Pie } from "react-chartjs-2";

const Graphic = props => {
	const data = {
		labels: ["Company1", "Company2", "Company3"],
		datasets: [
			{
				data: [25, 10, 75],
				backgroundColor: ["yellow", "blue", "red"]
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
