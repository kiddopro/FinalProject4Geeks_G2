import React, { Fragment } from "react";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand logo" href="#">
					<Link to="/">
						<img
							className="logo"
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
						/>
					</Link>
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="botonprodu collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto">
						<li className="nav-item productos">
							<a className="nav-link active fortnite" aria-current="page" href="#">
								Todos los productos
							</a>
						</li>
						<form className="d-flex">
							<input
								className="form-control me-2 fortnite"
								type="search"
								placeholder="Buscar producto..."
								aria-label="Search"
							/>
							<button className="btn btn-outline-primary fortnite" type="submit">
								Buscar
							</button>
						</form>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<i className="fas fa-shopping-cart" />
							</a>
						</li>
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
					</ul>
				</div>
			</div>
		</nav>
	);
};
