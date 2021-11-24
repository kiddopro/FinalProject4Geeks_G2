import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<div className="footer-dark bg-light">
		<footer>
			<div className="container">
				<div className="row">
					<hr className="linea" />
					<div className="col-sm-6 col-md-3 item">
						<br />

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
					<div className="col-sm-6 col-md-3 item">
						<br />
					</div>
					<div className="col-md-6 item text">
						<br />
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
					<div className="col item social">
						<a href="#">
							<i className="icon ion-social-facebook" />
						</a>
						<a href="#">
							<i className="icon ion-social-twitter" />
						</a>
						<a href="#">
							<i className="icon ion-social-snapchat" />
						</a>
						<a href="#">
							<i className="icon ion-social-instagram" />
						</a>
					</div>
				</div>
				<p className="copyright">Tecnoferta.uy 2021 - 097 629 613 - Montevideo, Uruguay</p>
			</div>
		</footer>
	</div>
);
