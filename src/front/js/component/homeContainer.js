import React, { Component, useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

import ProductsContainer from "./productsContainer";

export const HomeContainer = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadSomeData();
		actions.setUsuario(localStorage.getItem("uid"));
	}, []);
	return (
		<div>
			<div
				id="carouselExampleDark"
				className="carousel carousel-dark slide bg-white rounded-pill "
				data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active imagenhome" data-bs-interval="4000">
						<img
							src="https://res.cloudinary.com/silvinaas/image/upload/v1636416721/tecno/gtr2e_sffumc.jpg"
							alt="..."
							className="d-block w-100"
						/>

						<div className="carousel-caption  textodos">
							<h5 className="titulo1">Llevá tu entrenamiento</h5>
							<h3 className="titulo2">A OTRO NIVEL</h3>
							<a href="#informacion" className="btn btn-light">
								Más información
							</a>
						</div>
					</div>
					<div className="carousel-item imagenhome" data-bs-interval="4000">
						<img
							src="https://res.cloudinary.com/silvinaas/image/upload/v1636418698/tecno/iphone12_rgqda1.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption textodos" data-bs-interval="4000">
							<h5 className="titulo1">La última tecnología</h5>
							<h3 className="titulo2">LA ENCONTRÁS ACÁ</h3>
							<a href="#informacion" className="btn btn-light">
								Más información
							</a>
						</div>
					</div>
					<div className="carousel-item imagenhome">
						<img
							src="https://res.cloudinary.com/silvinaas/image/upload/v1636418700/tecno/xiaomimivacuum_ntuko0.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption textodos">
							<h5 className="titulo1">Limpiar la casa</h5>
							<h3 className="titulo2">NUNCA FUE TAN FÁCIL</h3>
							<a href="#informacion" className="btn btn-light">
								Más información
							</a>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
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
		</div>
	);
};

export default HomeContainer;
