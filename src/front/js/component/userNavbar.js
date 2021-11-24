import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
	const [token, setToken] = useState();
	useEffect(() => {
		localStorage.getItem("token") ? setToken(true) : setToken(false);
	}, []);

	return !token ? (
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				id="navbarDropdown"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				<i className="fas fa-user" />
			</a>
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				<li>
					<Link to="/signin">
						<a className="dropdown-item fortnite" href="#">
							Registrarse
						</a>
					</Link>
				</li>
				<li>
					<Link to="/login">
						<a className="dropdown-item fortnite" href="#">
							Ingresar
						</a>
					</Link>
				</li>
			</ul>
		</li>
	) : (
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				id="navbarDropdown"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				<i className="fas fa-user" />
			</a>
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				<li>
					<Link to="/signin">
						<a className="dropdown-item fortnite" href="#">
							Ingreso
						</a>
					</Link>
				</li>
				<li>
					<Link to="/login">
						<a className="dropdown-item fortnite" href="#">
							Ingresado
						</a>
					</Link>
				</li>
				<li>
					<hr className="dropdown-divider" />
				</li>
				<li>
					<a className="dropdown-item fortnite text-danger" href="#">
						Salir
					</a>
				</li>
			</ul>
		</li>
	);
};

export default UserNavbar;
