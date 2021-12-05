import React, { Component, Fragment, useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.scss";
import ReactPlayer from "react-player";

import ProductsContainer from "./productsContainer";

export const Hom2 = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadSomeData();
		actions.setUsuario(localStorage.getItem("uid"));
	}, []);
	return (
		<Fragment>
			<div id="bgVideo">
				<ReactPlayer
					url={require("../../img/Nft Video - 74779.mp4")}
					width="100%"
					height="100%"
					playing
					muted
					loop
				/>
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
