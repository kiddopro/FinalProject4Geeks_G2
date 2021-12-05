import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const UserNavbar = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setUsuario(localStorage.getItem("uid"));
	}, []);
	const salir = () => {
		actions.salir();
	};
	return (
		<>
			{!store.auth ? (
				<li className="nav-item dropstart ">
					<a
						className="nav-link dropstart iconoUsuario"
						href="#"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<i className="fas fa-user" />
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<Link to="/signin">
							<li>
								<a className="dropdown-item fortnite" href="#">
									Registrarse
								</a>
							</li>
						</Link>
						<Link to="/login">
							<li>
								<a className="dropdown-item fortnite" href="#">
									Ingresar
								</a>
							</li>
						</Link>
					</ul>
				</li>
			) : (
				<li className="nav-item dropstart ">
					<a
						className="nav-link dropstart iconoUsuario"
						href="#"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<i className="fas fa-user" />
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<Link to="/profile">
							<li>
								<a className="dropdown-item fortnite">Mi perfil</a>
							</li>
						</Link>
						<Link to="/change_password">
							<li>
								<a className="dropdown-item fortnite">Cambiar contraseña</a>
							</li>
						</Link>
						{store.admin ? (
							<Link to="/admin">
								<li>
									<a className="dropdown-item fortnite">Admin</a>
								</li>
							</Link>
						) : null}
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item fortnite text-danger" onClick={() => salir()}>
								Salir
							</a>
						</li>
					</ul>
				</li>
			)}
		</>
	);
};

export default UserNavbar;
