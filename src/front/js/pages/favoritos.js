import React, { useContext } from "react";
import { Context } from "../store/appContext";
import FavoritosContainer from "../component/favoritosContainer";
import "../../styles/favoritos.scss";
import { Redirect } from "react-router-dom";

export const Favoritos = () => {
	// return <CarritoContainer />;
	return <FavoritosContainer />;
};
export default Favoritos;
