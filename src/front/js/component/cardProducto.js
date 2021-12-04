import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardProducto = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "20%", display: "inline-block", margin: "10px" }}>
			<img src={props.imagen} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text w-100">{props.descripcion}</p>
				<p className="card-text">{"$" + props.precio + " USD"}</p>
				<Link to={"/productos/" + props.id}>
					<button type="button" className="btn btn-outline-primary">
						Ver más
					</button>
				</Link>
				&nbsp;
				<button
					type="button"
					onClick={() => actions.addToCart(item)}
					className={store.auth ? "btn btn-outline-primary" : "btn btn-outline-primary disabled"}>
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
};

CardProducto.propTypes = {
	nombre: PropTypes.string,
	imagen: PropTypes.string,
	descripcion: PropTypes.string,
	id: PropTypes.number,
	precio: PropTypes.number
};

export default CardProducto;
