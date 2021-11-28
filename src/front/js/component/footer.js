import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<div className="footer-dark bg-light">
		<footer>
			<div className="container-fluid">
				<div className="row">
					<hr className="linea" />
					<div className="col-sm-4 col-md-4 item">
						<h6 className="fw-bold contacto">Contacto</h6>
						<ul className="redessociales">
							<li>
								<i className=" fab fa-whatsapp" />
								<a className="redes link" href="https://wa.me/+59897629613">
									{" "}
									Whatsapp
								</a>
							</li>
							<li>
								<i className=" fab fa-instagram" />
								<a className="redes link" href="https://www.instagram.com/tecnoferta.uy/">
									{" "}
									Instagram
								</a>
							</li>
							<li>
								<i className="redes fab fa-facebook" />

								<a className="redes link" href="https://www.facebook.com/tecnoferta.uy/">
									{" "}
									Facebook
								</a>
							</li>

							<li>
								<i className="redes far fa-envelope" />

								<a
									className="redes link"
									href="mailto:tecnoferta.uy@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">
									{" "}
									Mail
								</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-4 col-md-4 item">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13089.950364054896!2d-56.17391110668515!3d-34.89421138631934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81abf129825f%3A0xb9c6f293bee406f4!2sTres%20Cruces%20Shopping!5e0!3m2!1ses-419!2suy!4v1638114441474!5m2!1ses-419!2suy"
							width="100%"
							height="200"
							loading="lazy"
						/>
					</div>
					<div className="col-md-4 item text">
						<h6 className="fw-bold">Sobre nosotros</h6>{" "}
						<p>
							<li className="opcion">
								Estamos ubicados en el centro de Montevideo, en las calles Canelones y Río Negro.
							</li>
							<li className="opcion">
								Podes retirar tu compra por nuestro Pick Up o te la enviamos a cualquier punto del país.
							</li>
							<li className="opcion">
								Trabajamos con efectivo, transferencia, débito y crédito hasta en 12 cuotas sin recargo.
							</li>
							<li className="opcion">
								Todos nuestros productos cuentan con garantía contra defecto de fabricación.
							</li>
						</p>
					</div>
				</div>
				<p className="copyright">Tecnoferta.uy 2021 - 097 629 613 - Montevideo, Uruguay</p>
			</div>
		</footer>
	</div>
);
