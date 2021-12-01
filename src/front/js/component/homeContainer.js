import React, { Component, useContext, useEffect } from "react";
import Proptypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const HomeContainer = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadSomeData();
		// actions.setUsuario(localStorage.getItem("uid"));
	}, []);
	return (
		<div>
			<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
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
					<div className="carousel-item active imagenhome" data-bs-interval="5000">
						<img
							src="https://res.cloudinary.com/silvinaas/image/upload/v1636416721/tecno/gtr2e_sffumc.jpg"
							className="d-inline w-100"
							alt="..."
						/>

						<div className="carousel-caption d-none d-md-block textodos">
							<h5 className="fs-1 fst-italic titulo1">Llevá tu entrenamiento</h5>
							<p className="titulo2">A OTRO NIVEL</p>
							<a href="#informacion" className="btn btn-outline-primary">
								Más información
							</a>
						</div>
					</div>
					<div className="carousel-item imagenhome" data-bs-interval="2000">
						<img
							src="https://res.cloudinary.com/silvinaas/image/upload/v1636418698/tecno/iphone12_rgqda1.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block textodos" data-bs-interval="2000">
							<h5 className="fs-1 fst-italic titulo1">La última tecnología</h5>
							<p className="titulo2">LA ENCONTRÁS ACÁ</p>
							<a href="#informacion" className="btn btn-outline-primary">
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
						<div className="carousel-caption d-none d-md-block textodos">
							<h5 className="fs-1 fst-italic titulo1">Limpiar la casa</h5>
							<p className="titulo2">NUNCA FUE TAN FÁCIL</p>
							<a href="#informacion" className="btn btn-outline-primary">
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
			<h3 className="text-center mt-5">Smartwatches</h3>
			<br />

			<div
				className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
				style={{ overflowX: "scroll", overflowY: "hidden" }}>
				{store.smartwatch.map((item, index) => {
					return (
						<div
							className="card"
							key={index}
							style={{ width: "20%", display: "inline-block", margin: "10px" }}>
							<img src={item.imagen} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.nombre}</h5>
								<p className="card-text w-100">{item.descripcion}</p>
								<p className="card-text">{"$" + item.precio + " USD"}</p>
								<Link to={"/productos/" + item.id}>
									<button type="button" className="btn btn-outline-primary">
										Ver más
									</button>
								</Link>
								&nbsp;
								<button
									type="button"
									onClick={() => actions.addToCart(item)}
									className={
										store.auth ? "btn btn-outline-primary" : "btn btn-outline-primary disabled"
									}>
									Agregar al carrito
								</button>
								{/* &nbsp;
								<button
									onClick={() => actions.addFavorite(item.nombre)}
									className="btn btn-outline-primary">
									<i className="corazon fas fa-heart " />
								</button> */}
							</div>
						</div>
					);
				})}
			</div>
			<br />
			<h3 className="text-center">Celulares</h3>
			<br />
			<div
				className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
				style={{ overflowX: "scroll", overflowY: "hidden" }}>
				{store.smartphone.map((item, index) => {
					return (
						<div
							className="card"
							key={index}
							style={{ width: "20%", display: "inline-block", margin: "10px" }}>
							<img src={item.imagen} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.nombre}</h5>
								<p className="card-text w-100">{item.descripcion}</p>
								<p className="card-text">{"$" + item.precio + " USD"}</p>
								<Link to={"/productos/" + item.id}>
									<button type="button" className="btn btn-outline-primary">
										Ver más
									</button>
								</Link>
								&nbsp;
								<button
									type="button"
									onClick={() => actions.addToCart(item)}
									className={
										store.auth ? "btn btn-outline-primary" : "btn btn-outline-primary disabled"
									}>
									Agregar al carrito
								</button>
								{/* &nbsp;
								<button
									onClick={() => actions.addFavorite(item.nombre)}
									className="btn btn-outline-primary">
									<i className="corazon fas fa-heart " />
								</button> */}
							</div>
						</div>
					);
				})}
			</div>
			<br />
			<h3 className="text-center">Accesorios</h3>
			<br />
			<div
				className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
				style={{ overflowX: "scroll", overflowY: "hidden" }}>
				{store.accesorios.map((item, index) => {
					return (
						<div
							className="card"
							key={index}
							style={{ width: "20%", display: "inline-block", margin: "10px" }}>
							<img src={item.imagen} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.nombre}</h5>
								<p className="card-text w-100">{item.descripcion}</p>
								<p className="card-text">{"$" + item.precio + " USD"}</p>
								<Link to={"/productos/" + item.id}>
									<button type="button" className="btn btn-outline-primary">
										Ver más
									</button>
								</Link>
								&nbsp;
								<button
									type="button"
									onClick={() => actions.addToCart(item)}
									className={
										store.auth ? "btn btn-outline-primary" : "btn btn-outline-primary disabled"
									}>
									Agregar al carrito
								</button>
								{/* &nbsp;
								<button
									onClick={() => actions.addFavorite(item.nombre)}
									className="btn btn-outline-primary">
									<i className="corazon fas fa-heart " />
								</button> */}
							</div>
						</div>
					);
				})}
			</div>
			<br />
		</div>
	);
};

export default HomeContainer;
