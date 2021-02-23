import React from "react";
import "../../styles/dashboard.scss";
import Graphic from "../component/Graphics";
import GraphicLine from "../component/GraphicLine";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

const Dashboards = () => {
	return (
		<div className="Container">
			<div>
				<h1>DASHBOARDS</h1>
				<br />
				<h2>Know your people`s</h2>
				<br />
				<label>Time to see how are the doing!</label>
				<br />
			</div>

			<div className="v">
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Overall">
						<Graphic />
					</Tab>
					<Tab eventKey="profile" title="History">
						<GraphicLine />
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default Dashboards;

{
	/* <GraphicLine />
<Graphic /> */
}
