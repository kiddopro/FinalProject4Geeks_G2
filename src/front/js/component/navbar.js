import React, { Fragment } from "react";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		// <nav className="navbar navbar-light bg-light">
		// 	<div className="container">
		// 		<Link to="/">
		// 			<span className="navbar-brand mb-0 h1">
		// 				<img
		// 					src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
		// 					style={{ width: "10%" }}
		// 				/>
		// 			</span>
		// 		</Link>
		// 		<div className="ml-auto">
		// 			<Link to="/demo">
		// 				<button className="btn btn-primary">Check the Context in action</button>
		// 			</Link>
		// 		</div>
		// 	</div>
		// </nav>

		// 	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		// 	<div class="container-fluid">
		// 	  <a class="navbar-brand" href="#">Navbar</a>
		// 	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		// 		<span class="navbar-toggler-icon"></span>
		// 	  </button>
		// 	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		// 		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
		// 		  <li class="nav-item">
		// 			<a class="nav-link active" aria-current="page" href="#">Home</a>
		// 		  </li>
		// 		  <li class="nav-item">
		// 			<a class="nav-link" href="#">Link</a>
		// 		  </li>
		// 		  <li class="nav-item dropdown">
		// 			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		// 			  Dropdown
		// 			</a>
		// 			<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
		// 			  <li><a class="dropdown-item" href="#">Action</a></li>
		// 			  <li><a class="dropdown-item" href="#">Another action</a></li>
		// 			  <li><hr class="dropdown-divider"></li>
		// 			  <li><a class="dropdown-item" href="#">Something else here</a></li>
		// 			</ul>
		// 		  </li>
		// 		  <li class="nav-item">
		// 			<a class="nav-link disabled">Disabled</a>
		// 		  </li>
		// 		</ul>
		// 		<form class="d-flex">
		// 		  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
		// 		  <button class="btn btn-outline-success" type="submit">Search</button>
		// 		</form>
		// 	  </div>
		// 	</div>
		//   </nav>

		// <nav className="navbar fuentenav navbar-expand-lg navbar-light bg-light">
		// 	<div className="container-fluid">
		// 		<a className="navbar-brand" href="#">
		// 			<img
		// 				src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
		// 				style={{ width: "10%" }}
		// 			/>
		// 		</a>
		// 		<button
		// 			className="navbar-toggler"
		// 			type="button"
		// 			data-bs-toggle="collapse"
		// 			data-bs-target="#navbarSupportedContent"
		// 			aria-controls="navbarSupportedContent"
		// 			aria-expanded="false"
		// 			aria-label="Toggle navigation">
		// 			<span className="navbar-toggler-icon" />
		// 		</button>

		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand logo" href="#">
					<img
						className="logo"
						src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
					/>
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
							<a className="nav-link active" aria-current="page" href="#">
								Todos los productos
							</a>
						</li>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Buscar producto..."
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
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
									<a className="dropdown-item" href="#">
										Registrarse
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Ingresar
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
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
