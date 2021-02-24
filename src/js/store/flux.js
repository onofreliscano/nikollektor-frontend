import { useHistory } from "react-router-dom";

const BASE_URL = "http://localhost:5000";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			jwt: null,
			is_manager: false
		},
		actions: {
			registroManager: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/signup_manager`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			registroCompany: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/signup_company`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			registroHumanTalent: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/human_talent`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			registroTeam: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/team_create`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: {
							"Content-Type": "application/json"
						}
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			login: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/login`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					if (respuesta.ok) {
						let resultado = await respuesta.json();
						console.log(resultado);
						setStore({
							jwt: resultado.jwt,
							is_manager: resultado.is_manager
						});
						return true;
					}
					return false;
					// let history = useHistory();
					// history.push("/Welcome");
				} catch (error) {
					console.log("explote", error);
				}
			},

			registroMoods: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/moods`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
