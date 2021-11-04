import React, { Fragment } from "react";
import "../../styles/loginContainer.scss";

const LoginContainer = () => {
	return (
		<div id="contenedor" className="container">
			<div className="row">
				<div id="left" className="col-md-6 col-sm-6 left-side d-flex align-items-center">
					{/* <div id="left-side" /> */}
					<div id="text" className="d-flex flex-column align-items-center text-white">
						{/* <h1>Login</h1> */}
						<img
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
							style={{ width: "50%" }}
						/>
						<small>To our website and buy anything!</small>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 right-side d-flex flex-column justify-content-between">
					<div className="title text-center">
						<h1>Login</h1>
						{/* <img
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
							style={{ width: "50%" }}
						/> */}
					</div>
					<div className="inputs m-2">
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping">
								📧
							</span>
							<input
								type="email"
								className="form-control"
								placeholder="email"
								aria-label="email"
								aria-describedby="addon-wrapping"
							/>
						</div>
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping">
								🔑
							</span>
							<input
								type="password"
								className="form-control"
								placeholder="password"
								aria-label="password"
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
