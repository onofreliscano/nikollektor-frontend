//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
//import "animate.css/animate.css";

//include your index.scss file into the bundle
//import "../styles/index.scss";
import "../styles/styles.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
