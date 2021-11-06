import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<hr className="text-primary" size="5" width="100%" />
		<h3> Contactate con nosotros! </h3>
		<p>
			<i className="fab fa-whatsapp" />
			{/* Made with <i className="fa fa-heart text-danger" /> by{" "} */}
			<a href="https://wa.me/+59897629613"> Whatsapp</a>
		</p>
		<p>
			<i className="fab fa-instagram" />
			{/* Made with <i className="fa fa-heart text-danger" /> by{" "} */}
			<a href="https://www.instagram.com/tecnoferta.uy/"> Instagram</a>
		</p>
		<p>
			<i className="fab fa-facebook" />
			{/* Made with <i className="fa fa-heart text-danger" /> by{" "} */}
			<a href="https://www.facebook.com/tecnoferta.uy/"> Facebook</a>
		</p>
		<p>
			<i className="fas fa-map-marker-alt" />
			{/* Made with <i className="fa fa-heart text-danger" /> by{" "} */}
			&nbsp; PickUp en el centro de Montevideo, entre las calles Canelones y Río negro
		</p>
	</footer>
);
