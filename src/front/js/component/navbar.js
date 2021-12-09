import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import UserNavbar from "./userNavbar";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setUsuario(localStorage.getItem("uid"));
	}, []);
	return (
		<nav className="navbar navbar-expand navbar-light sticky-top rounded">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand logo">
						<img
							className="logo img-fluid"
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
						/>
					</a>
				</Link>
				<div className="collapse navbar-collapse">
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
						className="botonprodu collapse navbar-collapse justify-content-end"
						id="navbarSupportedContent">
						<ul className="navbar-nav">
							<Link to="/">
								<li className="nav-item productos">
									<a className="nav-link active fortnite todoslosprod text-white" aria-current="page">
										Todos los productos
									</a>
								</li>
							</Link>
							{/* <form className="d-flex">
								<input
									className="form-control me-2 fortnite"
									type="search"
									placeholder="Buscar producto..."
									aria-label="Search"
								/>
								<button className="btn btn-outline-primary fortnite" type="submit">
									Buscar
								</button>
							</form> */}

							<div className="d-flex">
								<Link to="/carrito">
									<div className="dropdown dropstart">
										<button
											className="btn dropdown-toggle justify-content-end"
											type="button"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											<i className="fas iconnav fa-shopping-cart" />
											&nbsp;
											<span className="badge bg-secondary">{store.carrito.length}</span>
										</button>
										<ul
											className="dropdown-menu bg-dark listaCarrito"
											aria-labelledby="dropdownMenuButton1">
											{store.carrito.length > 0 ? (
												store.carrito.map((carritoitem, index) => {
													console.log(carritoitem);
													return (
														<li
															key={index}
															className="d-flex justify-content-between align-items-center w-100">
															<a className="dropdown-item text-white">
																{carritoitem.nombre}
															</a>
															<button
																type="button"
																className="dropdown-item btn-close btn-outline-danger"
																aria-label="Close"
																onClick={() => actions.removeFromCart(index)}
															/>
														</li>
													);
												})
											) : (
												<li className="d-flex justify-content-end">
													<a className="dropdown-item text-white pointer-default">
														{"vacío"}
													</a>
												</li>
											)}
										</ul>
									</div>
								</Link>
							</div>

							{/* <li className="nav-item ">
								<a className="nav-link" href="#">
									<Link to="/favoritos">
										<i className="corazon fas fa-heart " />
									</Link>
								</a>
							</li> */}

							<UserNavbar />
							{/* <li className="nav-item dropstart">
								<a
									className="nav-link dropstart"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									<i className="fas iconnav fa-user" />
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<Link to="/signin">
											<a className="dropdown-item fortnite opciondrop" href="#">
												Registrarse
											</a>
										</Link>
									</li>
									<li>
										<Link to="/login">
											<a className="dropdown-item opciondrop fortnite" href="#">
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
							</li> */}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
