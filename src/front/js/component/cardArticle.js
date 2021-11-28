import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardArticle = props => {
	const { store, actions } = useContext(Context);
	const agregarFavorito = () => {};
	return (
		//style={{ maxWidth: "540px" }}
		<div className="card mb-3 mx-auto">
			<div className="row g-0">
				<div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
					<img src={props.image} className="img-fluid rounded-start w-50" alt="imagen articulo" />
					<div
						className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
						style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
						{store.probando.map((item, index) => {
							return <img key={index} className="w-25" src="https://via.placeholder.com/150" />;
						})}
					</div>
					{/* <div className="d-flex ">
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
					</div> */}
				</div>
				<div className="col-md-6">
					<div className="card-body">
						<div>
							<h1 className="card-title mb-5">{props.name}</h1>
							<hr />
							<div className="card-text d-flex justify-content-between align-items-center">
								<h2>${props.unit_cost}</h2>
								<select className="w-25">
									<option>Seleccionar colors</option>
									<option>Rojo</option>
								</select>
							</div>
							<hr />
							<small className="card-text text-secondary">
								{props.description}
								{/* <small className="text-muted">Last updated 3 mins ago</small> */}
							</small>
							<hr />
							<div className="d-flex justify-content-between">
								{store.auth ? (
									<button type="button" className="btn btn-primary" onClick={() => agregarFavorito()}>
										Agregar al carrito
									</button>
								) : (
									<button type="button" className="btn btn-primary disabled">
										Agregar al carrito
									</button>
								)}
								<Link to="/">
									<button type="button" className="btn btn-primary">
										Volver
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardArticle;

CardArticle.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	unit_cost: PropTypes.string,
	description: PropTypes.string
};
