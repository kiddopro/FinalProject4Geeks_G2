import React, { Fragment } from "react";
import "../../styles/loginContainer.scss";

const LoginContainer = () => {
	return (
		<div id="contenedor" className="container">
			<div className="row">
				<div id="left" className="col-md-6 col-sm-3 d-flex left-side justify-content-center align-items-center">
					<div id="left-side" />
					<div id="text">
						<h1>Login</h1>
						<small>To our website and buy anything!</small>
					</div>
				</div>
				<div className="col-md-6 col-sm-3 right-side">
					<div className="text-center">
						<img src="https://i.ibb.co/C1Z8b60/logo-FINAL.png" style={{ width: "50%" }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginContainer;
