import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Admin = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getUsuarios();
	}, []);
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-center">Panel de Administrador</h1>
				</div>
				<div className="col-md-12">Hola</div>
			</div>
		</div>
	);
};

export default Admin;
