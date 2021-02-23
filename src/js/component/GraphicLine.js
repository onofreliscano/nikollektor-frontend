import React from "react";
import { Line } from "react-chartjs-2";

const GraphicLine = props => {
	const data = {
		labels: [
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre"
		],
		datasets: [
			{
				label: "Numero de reacciones por mes",
				fill: false,
				backgroundColor: "rgba(73,155,234,1)",
				borderColor: "rgba(73,155,234,1)",
				pointBorderColor: "rgba(73,155,234,1)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(73,155,234,1)",
				pointHoverBorderColor: "rgba(73,155,234,1)",
				pointRadius: 1,
				pointHitRadius: 10,
				data: [20, 12, 24, 34, 18, 27, 30, 10, 16, 14, 26, 29]
			}
		]
	};

	return (
		<div className="Grafica-Line">
			<Line data={data} />
		</div>
	);
};

export default GraphicLine;
