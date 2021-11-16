import Swal from "sweetalert2";
const URL_SERVIDOR = "https://3001-yellow-koala-6du6jbgy.ws-us18.gitpod.io/api/";
const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: toast => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	}
});

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			forgotPassword: email => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(URL_SERVIDOR + "forgot_password", requestOptions)
					.then(response => {
						response.json();
						if (response.status == 200 || response.status != 200) {
							Toast.fire({
								icon: "success",
								title:
									"Si el correo es válido debes de recibir un mensaje con los pasos a seguir para recuperar tu cuenta"
							});
						}
						// if (response.status == 200) {
						// 	Swal.fire({
						// 		title: "Correcto!",
						// 		text: "Verifica tu casilla de correos para restaurar tu constraseña",
						// 		icon: "success",
						// 		confirmButtonText: "OK"
						// 	});
						// } else {
						// 	Swal.fire({
						// 		title: "Incorrecto!",
						// 		text: "El correo ingresado no es válido",
						// 		icon: "error",
						// 		confirmButtonText: "OK"
						// 	});
						// }
					})
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("error", error));
			},
			createUser: (fn, e, p, ph, a) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: fn,
					email: e,
					password: p,
					is_active: true,
					direccion: a,
					telefono: ph,
					documento: null,
					fecha_nac: null
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(URL_SERVIDOR + "usuarios", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("error", error));
			},
			loginUser: (e, p) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: e,
					password: p
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(URL_SERVIDOR + "login", requestOptions)
					.then(response => response.json())
					.then(result => {
						result.token ? localStorage.setItem("token", result.token) : console.log(result.msg);
					})
					.catch(error => console.log("error", error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			login: (email, password, setAuth) => {
				var miCabecera = new Headers();
				miCabecera.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});
				var requestOptions = {
					method: "POST",
					headers: miCabecera,
					body: raw,
					redirect: "follow"
				};

				fetch(URL_SERVIDOR + "login", requestOptions)
					.then(response => {
						console.log("status", response.status);
						response.status == 200 ? setAuth(true) : setAuth(false);
						return response.json();
					})
					.then(result => {
						localStorage.setItem("token", result.token);
					})
					.catch(error => console.log("error", error));
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
