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
				label: "Angry",
				fill: false,
				backgroundColor: "rgba(241,62,61,1)",
				borderColor: "rgba(241,62,61,1)",
				pointBorderColor: "rgba(241,62,61,1)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(241,62,61,1)",
				pointHoverBorderColor: "rgba(241,62,61,1)",
				pointRadius: 1,
				pointHitRadius: 10,
				data: [2, 2, 4, 4, 1, 13, 10, 10, 6, 14, 6, 8]
			},
			{
				label: "Sad",
				fill: false,
				backgroundColor: "rgba(234,92,102,1)",
				borderColor: "rgba(234,92,102,1)",
				pointBorderColor: "rgba(234,92,102,1)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(234,92,102,1)",
				pointHoverBorderColor: "rgba(234,92,102,1)",
				pointRadius: 1,
				pointHitRadius: 4,
				data: [18, 16, 11, 2, 5, 4, 7, 9, 0, 3, 6, 5]
			},
			{
				label: "Neutral",
				fill: false,
				backgroundColor: "rgba(250,132,50,1)",
				borderColor: "rgba(250,132,50,1)",
				pointBorderColor: "rgba(250,132,50,1)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(250,132,50,1)",
				pointHoverBorderColor: "rgba(250,132,50,1)",
				pointRadius: 1,
				pointHitRadius: 4,
				data: [5, 8, 4, 6, 12, 10, 5, 4, 3, 8, 1, 1]
			},
			{
				label: "Shocked",
				fill: false,
				backgroundColor: "rgba(254,210,49,1)",
				borderColor: "rgba(254,210,49,1)",
				pointBorderColor: "rgba(254,210,49,1)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(254,210,49,1)",
				pointHoverBorderColor: "rgba(254,210,49,1)",
				pointRadius: 1,
				pointHitRadius: 4,
				data: [5, 10, 11, 11, 11, 1, 3, 5, 3, 8, 4, 4]
			},
			{
				label: "Happy",
				fill: false,
				backgroundColor: "rgba(42,230,135,1)",
				borderColor: "rgba(42,230,135,1)",
				pointBorderColor: "rgba(42,230,135,1)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(42,230,135,1)",
				pointHoverBorderColor: "rgba(42,230,135,1)",
				pointRadius: 1,
				pointHitRadius: 4,
				data: [8, 1, 1, 8, 18, 1, 4, 8, 16, 9, 26, 9]
			},
			{
				label: "Awesome",
				fill: false,
				backgroundColor: "rgba(34,168,49,1)",
				borderColor: "rgba(34,168,49,1)",
				pointBorderColor: "rgba(34,168,49,1)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(34,168,49,1)",
				pointHoverBorderColor: "rgba(34,168,49,1)",
				pointRadius: 1,
				pointHitRadius: 4,
				data: [9, 9, 9, 9, 12, 8, 12, 11, 9, 10, 11, 15]
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
