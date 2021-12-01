import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const CarritoPrueba = () => {
	const { store, actions } = useContext(Context);
	const [domicilio, setDomicilio] = useState(false);
	let total = 0;

	return (
		<>
			{store.auth ? (
				<div className="container carrito">
					<h1 className="fortnite">
						Mi carrito <i className="carro fas fa-shopping-cart" />
					</h1>
					<div className="container carritoadentro">
						&nbsp;
						<h4 className="letra">Productos</h4>
						<div>
							{store.carrito.map((carritoitem, index) => {
								total += carritoitem.precio;
								return (
									<div
										className="accordion d-flex justify-content-between align-items-center"
										key={index}
										id="accordionExample">
										<div className="accordion-item">
											<h2 className="accordion-header" id="headingTwo">
												<button
													className="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo">
													{carritoitem.nombre} {" $" + carritoitem.precio}
												</button>
											</h2>
											<div
												id="collapseTwo"
												className="accordion-collapse collapse"
												aria-labelledby="headingTwo"
												data-bs-parent="#accordionExample">
												<div className="accordion-body">{carritoitem.descripcion}</div>
											</div>
										</div>
										<div>
											<button
												type="button"
												className="btn-close ms-3 btn btn-outline-danger"
												aria-label="Close"
												onClick={() => actions.removeFromCart(index)}
											/>
										</div>
									</div>
								);
							})}
							&nbsp;
							<h4 className="letra">Detalle de envío</h4>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
								/>
								<label className="form-check-label" htmlFor="flexRadioDefault1">
									Envío a domicilio
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
									checked
								/>
								<label className="form-check-label" htmlFor="flexRadioDefault2">
									Retiro en Pick Up
								</label>
							</div>
							&nbsp;
							<h4 className="letra">Detalle de pago</h4>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadio2"
									id="flexRadioDefault3"
								/>
								<label className="form-check-label" htmlFor="flexRadioDefault3">
									Transferencia a cuenta BROU/Santander
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadio2"
									id="flexRadioDefault4"
									checked
								/>
								<label className="form-check-label" htmlFor="flexRadioDefault4">
									Mercadopago (Hasta en 12 cuotas sin recargo)
								</label>
							</div>
							&nbsp;
						</div>
					</div>
					<div>
						<h3>Total : $ {total} </h3>
						<button
							className="btn btn-primary"
							type="button"
							onClick={() =>
								actions.pagarMercadoPago({
									items: store.formatoPago,
									payment_methods: {
										excluded_payment_types: [
											{
												id: "ticket"
											}
										]
									}
								})
							}>
							Confirmar
						</button>
						<div id="comprar" style={{ display: "inline" }} />
					</div>
				</div>
			) : (
				<div className="alert alert-danger text-center" role="alert">
					<h3>Acceso denegado!</h3>
					<h6>Debes estar logueado para ver tu carrito.</h6>
				</div>
			)}
		</>
	);
};

export default CarritoPrueba;
