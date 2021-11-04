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
				<div className="col-md-6 col-sm-3 right-side d-flex flex-column justify-content-between">
					<div className="text-center">
						<img
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
							style={{ width: "50%" }}
						/>
					</div>
					<div className="inputs m-2">
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping">
								📧
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								aria-label="Email"
								aria-describedby="addon-wrapping"
							/>
						</div>
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping">
								🔑
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								aria-label="Username"
								aria-describedby="addon-wrapping"
							/>
						</div>
					</div>
					<div className="options d-flex justify-content-between m-2">
						<div>
							<input className="m-1" type="checkbox" id="remember" value="remember" />
							<label htmlFor="remember">Remember me</label>
						</div>

						<a href="#">Forgot your password?</a>
					</div>
					<div className="buttons d-flex justify-content-between m-2">
						<button type="button" className="btn btn-primary">
							Login
						</button>
						<button type="button" className="btn btn-primary">
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginContainer;
