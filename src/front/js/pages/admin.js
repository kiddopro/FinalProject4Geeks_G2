import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Admin = () => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getUsuarios();
		},
		[store.listaUsuarios]
	);
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-center">Panel de Administrador</h1>
				</div>
				<div className="col-md-12">
					{store.listaUsuarios.map((item, index) => {
						return (
							<div key={index} className="card w-50 mx-auto">
								<div className="card-body d-flex justify-content-between">
									{item.email}
									<button onClick={() => console.log(item.id)} type="submit" className="btn">
										❌
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Admin;
