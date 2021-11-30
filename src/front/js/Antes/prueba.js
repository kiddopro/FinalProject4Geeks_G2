import React, { useEffect, useContext } from "react";
import CardArticle from "../component/cardArticle";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const Prueba = () => {
	const params = useParams();
	const { actions, store } = useContext(Context);
	useEffect(() => {
		actions.getProducto(params.id);
	}, []);

	return (
		<CardArticle
			image={store.productoSeleccionado.imagen}
			name={store.productoSeleccionado.nombre}
			unit_cost={store.productoSeleccionado.precio}
			description={store.productoSeleccionado.descripcion}
		/>
	);
};

export default Prueba;
