import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import CarritoContainer from "../component/carritoContainer";

import "../../styles/home.scss";
import Login from "./login";
import { Redirect } from "react-router-dom";

export const Carrito = () => {
	return <CarritoContainer />;
};
export default Carrito;
