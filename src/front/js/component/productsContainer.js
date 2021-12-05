import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/productsContainer.scss";
import CardProducto from "./cardProducto";

const ProductsContainer = props => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
			style={{ overflowX: "scroll", overflowY: "hidden" }}>
			{store.smartwatch.map((item, index) => {
				return (
					<CardProducto
						key={index}
						nombre={item.nombre}
						imagen={item.imagen}
						precio={item.precio}
						descripcion={item.descripcion}
						id={item.id}
					/>
				);
			})}
		</div>
	);
};

ProductsContainer.propTypes = {
	categoria: PropTypes.string
};

export default ProductsContainer;
