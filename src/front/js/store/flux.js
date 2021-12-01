import Swal from "sweetalert2";
// importación de emailjs
import { init } from "emailjs-com";
init("user_SzlH8wBZFeol2hhHEpsQn");
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
	const MERCADO_PAGO_PUBLIC_KEY = process.env.MP_PK;

	const mercadopago = new MercadoPago(MERCADO_PAGO_PUBLIC_KEY, {
		locale: "es-AR" // The most common are: 'pt-BR', 'es-AR' and 'en-US'
	});
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
			],
			auth: false,
			favorites: [],
			articulo: [],
			probando: [1, 2, 3, 4, 5],
			productoSeleccionado: {},
			carrito: [],
			smartwatch: [],
			smartphone: [],
			accesorios: [],
			formatoPago: []
		},

		actions: {
			///////////////////// CAMBIAR LA CONTRASEÑA /////////////////////
			restorePassword: (passwd1, passwd2, token) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				console.log(passwd1);
				if (
					passwd1 != "" &&
					passwd2 != "" &&
					passwd1 != undefined &&
					passwd2 != undefined &&
					passwd1 == passwd2
				) {
					var myHeaders = new Headers();
					myHeaders.append("Authorization", `Bearer ${token}`);
					myHeaders.append("Content-Type", "application/json");

					var raw = JSON.stringify({
						password: passwd1
					});

					var requestOptions = {
						method: "PUT",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};

					fetch(process.env.BACKEND_URL + "/api/restore_password", requestOptions)
						.then(response => {
							response.json();
							if (response.status == 200) {
								Toast.fire({
									icon: "success",
									title: "Se ha modificado la contraseña"
								});
							}
						})
						.then(result => console.log(result))
						.catch(error => console.log("error", error));
				} else {
					Toast.fire({
						icon: "error",
						title: "Las contraseñas no coinciden"
					});
				}
			},

			//////////////////////// OLVIDÓ LA CONTRASEÑA //////////////////////////////
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
				fetch(process.env.BACKEND_URL + "/api/forgot_password", requestOptions)
					.then(response => {
						response.json();
						if (response.status == 200 || response.status != 200) {
							Toast.fire({
								icon: "success",
								title:
									"Si el correo es válido debes de recibir un mensaje con los pasos a seguir para recuperar tu cuenta"
							});
						}
					})
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("error", error));
			},

			///////////////////// CREAR USUARIO //////////////////////
			createUser: (nombreCompleto, email, contraseña, telefono, direccion) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombreCompleto ? nombreCompleto : null,
					email: email ? email : null,
					password: contraseña ? contraseña : null,
					is_active: true,
					direccion: direccion ? direccion : null,
					telefono: telefono ? telefono : null,
					documento: null,
					fecha_nac: null
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/usuarios", requestOptions).then(response => {
					response.json();
					response.status == 200
						? Toast.fire({
								icon: "success",
								title: "Usuario creado con exito!"
						  })
						: Toast.fire({
								icon: "error",
								title: "No se pudo crear el usuario!"
						  });
				});
			},
			// Esto es agregado para probar
			// Lo hace Juan, para cargar Favoritos
			// a prepo
			// ==========================================
			// ==========================================
			pruebaAgregarFavoritos: async () => {
				let url = `${process.env.BACKEND_URL}/api/productos/1`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
					console.log(responseObject);
					setStore({
						favorites: [responseObject]
					});
				} catch (error) {
					console.log(error);
				}

				// es hasta aca ..............................
				//	-----------------------------------------------------
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

			////////////////////// LOGIN ///////////////////////
			login: (email, password) => {
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
				const store = getStore();

				fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
					.then(response => {
						console.log("status", response.status);
						response.status == 200
							? Toast.fire({
									icon: "success",
									title: "Logueado con exito!"
							  })
							: Toast.fire({
									icon: "error",
									title: "Credenciales incorrectas!"
							  });
						return response.json();
					})
					.then(result => {
						result.token != undefined
							? [localStorage.setItem("token", result.token), setStore({ auth: true })]
							: null;
						console.log(result);
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
			},
			///////////////////////// SALIR ////////////////////////////
			salir: () => {
				localStorage.clear();
				setStore({ auth: false });
			},
			autorizado: booleano => {
				setStore({ auth: booleano });
			},

			addFavorite: id => {
				console.log("agregando favorito");
				const store = getStore();
				setStore({ favorites: [...store.favorites, id] });
			},

			addToCart: product => {
				console.log("agregando al carrito");
				const store = getStore();
				// let producto = store.articulo.filter(item => item.nombre == name);
				console.log(product);
				setStore({ carrito: [...store.carrito, product] });

				let obj = {
					title: product.nombre,
					quantity: 1,
					unit_price: product.precio
				};
				setStore({ formatoPago: [...store.formatoPago, obj] });
				console.log(store.formatoPago);
			},
			pagarMercadoPago: carrito => {
				let myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${localStorage.getItem("Token")}`);
				myHeaders.append("Content-Type", "application/json");
				let raw = JSON.stringify(carrito);

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/pago", requestOptions)
					.then(response => response.json())
					.then(preference => {
						console.log(preference);
						// Para renderizar el botón de checkout
						console.log(preference);
						mercadopago.checkout({
							preference: {
								id: preference["id"]
							},
							render: {
								container: "#comprar", // Class name where the payment button will be displayed
								label: "Comprar" // Change the payment button text (optional)
							}
						});
					})
					.catch(error => console.log("error", error));
			},
			removeFromCart: indexcart => {
				console.log("quitando del carrito", indexcart);
				const store = getStore();
				const filteredCart = store.carrito.filter((carritoitem, index) => {
					return index != indexcart;
				});
				const filterFormato = store.formatoPago.filter((item, index) => {
					return index != indexcart;
				});
				setStore({ carrito: filteredCart });
				setStore({ formatoPago: filterFormato });
			},

			loadSomeData: () => {
				fetch(process.env.BACKEND_URL + "/api/productos")
					.then(response => response.json())
					.then(data => {
						setStore({ articulo: data });
						let resultado1 = data.filter(item => item.categoria == "smartwatch");
						let resultado2 = data.filter(item => item.categoria == "smartphone");
						let resultado3 = data.filter(item => item.categoria == "accesorios");
						setStore({ smartwatch: resultado1 });
						setStore({ smartphone: resultado2 });
						setStore({ accesorios: resultado3 });
						console.log(data);
					})
					.catch(error => console.log("error", error));
			},
			////////////////////// OBTENER PRODUCTO SELECCIONADO ////////////////////////
			getProducto: id => {
				fetch(process.env.BACKEND_URL + `/api/productos/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ productoSeleccionado: data });
						console.log(data);
					})
					.catch(error => console.log("error", error));
			}
			// setFotmatoPago: (item) => {
			// 	const store = getStore();
			// 	let obj = {
			// 		title: item.nombre,
			// 		quantity: 1,
			// 		unit_price: item.precio
			// 	}
			// 	setStore({formatoPago: [...store.formatoPago, obj]});
			// }
		}
	};
};

export default getState;
