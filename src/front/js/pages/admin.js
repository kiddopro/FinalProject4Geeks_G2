import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const Admin = () => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getUsuarios();
		},
		[store.listaUsuarios]
	);
	const delUsuario = id => {
		Swal.fire({
			title: "¿Estas seguro?",
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: "Si",
			denyButtonText: "Cancelar",
			customClass: {
				actions: "my-actions",
				cancelButton: "order-2 right-gap",
				confirmButton: "order-1",
				denyButton: "order-3"
			}
		}).then(result => {
			if (result.isConfirmed) {
				actions.borrarUsuario(id);
				Swal.fire("Se ha borrado exitosamente! ", "", "success");
			}
		});
	};

	return (
		<>
			{store.auth && store.admin ? (
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
											<button onClick={() => delUsuario(item.id)} type="button" className="btn">
												❌
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			) : (
				<div className="alert alert-danger text-center" role="alert">
					<h3>Acceso denegado!</h3>
				</div>
			)}
		</>
	);
};

export default Admin;
