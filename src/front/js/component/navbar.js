import React, { Fragment } from "react";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import UserNavbar from "./userNavbar";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand logo">
					<Link to="/">
						<img
							className="logo"
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
						/>
					</Link>
				</a>
				<div className="float-right">
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
					<div
						className="botonprodu collapse navbar-collapse justify-content-center"
						id="navbarSupportedContent">
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
							<li className="nav-item ">
								<a className="nav-link" href="#">
									<Link to="/carrito">
										<i className="fas fa-shopping-cart" />
									</Link>
								</a>
							</li>

							<li className="nav-item ">
								<a className="nav-link" href="#">
									<Link to="/favoritos">
										<i className="corazon fas fa-heart " />
									</Link>
								</a>
							</li>

							<UserNavbar />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
