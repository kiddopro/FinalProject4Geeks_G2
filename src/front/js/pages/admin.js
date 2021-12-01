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
				<div className="col-md-12">
					{store.listaUsuarios.map((item, index) => {
						return (
							<div key={index} className="">
								{item.email}
								<button onClick={() => console.log(item.id)} type="submit">
									❌
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Admin;
