import React, { Component, Fragment, useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

import ProductsContainer from "./productsContainer";
import videoBG from "../../img/videoo.mp4";

export const Hom2 = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadSomeData();
		actions.setUsuario(localStorage.getItem("uid"));
	}, []);
	return (
		<Fragment>
			<div id="bgVideo">
				<videoBG loop autoPlay muted>
					<source src={videoBG} type="video/mp4" />
				</videoBG>
			</div>

			<a name="informacion" />
			<h3 className="text-center mt-5 text-white">Smartwatches</h3>
			<br />

			<ProductsContainer categoria="smartwatch" />
			<br />
			<h3 className="text-center text-white">Celulares</h3>
			<br />
			<ProductsContainer categoria="smartphone" />
			<br />
			<h3 className="text-center text-white">Accesorios</h3>
			<br />
			<ProductsContainer categoria="accesorios" />
			<br />
		</Fragment>
	);
};

export default Hom2;
