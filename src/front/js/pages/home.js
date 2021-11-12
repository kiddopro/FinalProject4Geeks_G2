import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Login from "../pages/login";
import { Redirect } from "react-router-dom";

export const Home = () => {
	const [auth, setAuth] = useState();
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			setAuth(localStorage.getItem("token") ? true : false);
		},
		[auth]
	);

	return auth ? (
		<div className="text-center mt-5">
			<Login />
		</div>
	) : (
		<Redirect to="/login" />
	);
};
