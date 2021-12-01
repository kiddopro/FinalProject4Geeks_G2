import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import UserNavbar from "./userNavbar";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			<div className="container-fluid px-0">
				<a className="navbar-brand logo" href="#">
					<Link to="/">
						<img
							className="logo img-fluid"
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
						/>
					</Link>
				</a>
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
						className="botonprodu collapse navbar-collapse justify-content-center"
						id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className="nav-item productos">
								<a className="nav-link active fortnite todoslosprod" aria-current="page" href="#">
									<Link to="/">Todos los productos</Link>
								</a>
							</li>
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
									<div className="dropdown">
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
										<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
											{store.carrito.map((carritoitem, index) => {
												console.log(carritoitem);
												return (
													<li key={index} className="d-flex justify-content-end">
														<a className="dropdown-item">
															{carritoitem.nombre}

															<button
																type="button"
																className="btn-close ms-3 btn btn-outline-danger"
																aria-label="Close"
																onClick={() => actions.removeFromCart(index)}
															/>
														</a>
													</li>
												);
											})}
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
