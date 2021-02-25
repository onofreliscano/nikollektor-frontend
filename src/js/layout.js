import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/footer";
import SignIn from "./component/sign-in";
import CompanySign from "./component/company-sign";
import Selections from "./component/Selections";
import HumanTalentSign from "./component/human-t-sign";
import TeamSignIn from "./component/Team-sign";
import Welcome from "./component/Welcome";
import MoodSelection from "./component/MoodSelection";
import Dashboards from "./views/Dashboards";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/sign-in">
							<SignIn />
						</Route>
						<Route exact path="/company-sign">
							<CompanySign />
						</Route>
						<Route exact path="/MoodSelection">
							<MoodSelection />
						</Route>
						<Route exact path="/selections">
							<Selections />
						</Route>
						<Route exact path="/Welcome">
							<Welcome />
						</Route>
						<Route exact path="/human-talent-sign">
							<HumanTalentSign />
						</Route>
						<Route exact path="/Team-sign">
							<TeamSignIn />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/dashboards">
							<Dashboards />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
