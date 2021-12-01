import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Prueba from "./pages/prueba";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Carrito } from "./pages/carrito";
import { Favoritos } from "./pages/favoritos";
import NuevoLogin from "./component/nuevoLogin";
import injectContext from "./store/appContext";
import ForgotPassword from "./pages/forgotPassword";
import CambiarContraseña from "./pages/cambiar_contraseña";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./pages/login";
import SignIn from "./pages/signin";
import RestorePassword from "./pages/restorePassword";

import { useEffect, useContext } from "react";
import { Context } from "./store/appContext";
import Profile from "./pages/profile";
import Admin from "./pages/admin";
//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			const bol =
				localStorage.getItem("token") != undefined && localStorage.getItem("token") != "" ? true : false;
			actions.autorizado(bol);
		},
		[store.auth]
	);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const login = localStorage.getItem("token") != undefined ? true : false;

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/login">
							<NuevoLogin />
						</Route>
						<Route exact path="/signin">
							<SignIn />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/productos/:id">
							<Prueba />
						</Route>
						<Route exact path="/forgot_password">
							<ForgotPassword />
						</Route>
						<Route exact path="/restore_password">
							<RestorePassword />
						</Route>
						<Route exact path="/carrito">
							<Carrito />
						</Route>
						<Route exact path="/change_password">
							<CambiarContraseña />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/admin">
							<Admin />
						</Route>
						<Route exact path="/favoritos">
							<Favoritos />
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
