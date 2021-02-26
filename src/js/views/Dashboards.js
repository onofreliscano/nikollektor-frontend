import React from "react";
import "../../styles/dashboard.scss";
import Graphic from "../component/Graphics";
import GraphicLine from "../component/GraphicLine";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

const Dashboards = () => {
	return (
		<div className="">
			<div className="row">
				<div className="col-sm">
					<div className="nikollector-container-home-left">
						DASHBOARDS ON THE ROAD!
						<br />
						<div className="nikollector-subtitles-sections">Time to se how is your people doing!</div>
					</div>
					<div className="nikollector-instructions-sections">
						Please handle this information with care
						<br />
						<br />
					</div>
				</div>
				<div className="col-sm">
					<div className="nikollector-container-home-right" />
				</div>
			</div>

			<div className="v">
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Overall" className="nav nav-pills">
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
