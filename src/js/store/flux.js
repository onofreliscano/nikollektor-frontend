import { useHistory } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			jwt: null,
			is_manager: false,
			human_talent: [],
			teams: [],
			team: {}
		},
		actions: {
			registroManager: async datos => {
				const store = getStore();
				datos["company_id"] = store.newCompany.id;
				try {
					const respuesta = await fetch(`${BASE_URL}/signup_manager`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					if (respuesta.ok) {
						let resultado = await respuesta.json();
						console.log(resultado);
						return true;
					} else {
						return false;
					}
				} catch (error) {
					console.log("explote", error);
					return false;
				}
			},

			registroCompany: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/signup_company`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					if (respuesta.ok) {
						let resultado = await respuesta.json();
						setStore({ newCompany: resultado });
						return true;
					} else {
						return false;
					}
				} catch (error) {
					console.log("explote", error);
					return false;
				}
			},

			registroHumanTalent: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/human-talent`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					if (respuesta.ok) {
						let resultado = await respuesta.json();
						setStore({ newTalent: resultado });
						return true;
					} else {
						return false;
					}
					// let resultado = await respuesta.json();
					// console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			listHumans: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/human-talent`, {
						method: "GET",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					if (respuesta.ok) {
						let resultado = await respuesta.json();
						console.log(resultado);
						setStore({
							human_talent: resultado
						});
					}
				} catch (error) {
					console.log("explote", error);
				}
			},

			listTeams: async (id = null) => {
				let url = BASE_URL + "/teams";
				// if (id != null) {
				// 	url += "/" + id;
				// }
				let response = await fetch(url);
				if (response.ok) {
					let body = await response.json();
					if (id == null) {
						setStore({
							teams: body
						});
					} else {
						setStore({ team: body });
					}
					return true;
				} else {
					console.log(response.status);
					return false;
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

			// listTeams: async jwt => {
			// 	if (!jwt) {
			// 		const store = getStore();
			// 		jwt = store.jwt;
			// 	}
			// 	try {
			// 		const respuesta = await fetch(`${BASE_URL}/teams`, {
			// 			method: "GET",
			// 			body: JSON.stringify(datos),
			// 			headers: {
			// 				Authorization: `Bearer ${jwt}`,
			// 				"Content-Type": "application/json"
			// 			}
			// 		});
			// 		if (respuesta.ok) {
			// 			let resultado = await respuesta.json();
			// 			console.log(resultado);
			// 			setStore({
			// 				teams: resultado
			// 			});
			// 		}
			// 	} catch (error) {
			// 		console.log("explote", error);
			// 	}
			// },

			login: async (datos, jwt) => {
				if (!jwt) {
					const store = getStore();
					jwt = store.jwt;
				}
				const actions = getActions();
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
						actions.listTeams(resultado.jwt);
						return true;
					}
					return false;
				} catch (error) {
					console.log("explote", error);
				}
			},

			registroMoods: async (datos, jwt) => {
				if (!jwt) {
					const store = getStore();
					jwt = store.jwt;
				}

				try {
					const respuesta = await fetch(`${BASE_URL}/moods`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${jwt}`
						}
					});
					if (respuesta.ok) {
						let resultado = await respuesta.json();
						console.log(resultado);
						setStore({
							jwt: resultado.jwt,
							is_manager: resultado.is_human_talent
						});
						return true;
					}
					return false;
				} catch (error) {
					console.log("explote", error);
				}
			},
			Moods: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/moods`, {
						method: "GET",
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
