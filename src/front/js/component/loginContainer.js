import React, { Fragment } from "react";
import "../../styles/loginContainer.scss";
import { Link } from "react-router-dom";

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
							style={{ width: "60%" }}
						/>
						<small className="fortnite">You want it, you got it!</small>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 right-side d-flex flex-column justify-content-between">
					<div id="titulo" className="title text-center">
						<h1 className="fortnite">Ingresar</h1>
						{/* <img
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
							style={{ width: "50%" }}
						/> */}
					</div>
					<div className="inputs m-2">
						<div className="input-group flex-nowrap">
							<span className="input-group-text text-center" id="addon-wrapping">
								<i className="fas fa-at" />
							</span>
							<input
								type="email"
								className="form-control fortnite"
								placeholder="Email"
								aria-label="email"
								aria-describedby="addon-wrapping"
							/>
						</div>
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping">
								<i className="fas fa-key" />
							</span>
							<input
								type="password"
								className="form-control fortnite"
								placeholder="Contraseña"
								aria-label="password"
								aria-describedby="addon-wrapping"
							/>
						</div>
					</div>
					<div className="options d-flex justify-content-between m-2">
						<div>
							<input className="m-1" type="checkbox" id="remember" value="remember" />
							<label className="fortnite" htmlFor="remember">
								Recordarme
							</label>{" "}
						</div>

						<a className="fortnite" href="#">
							¿Olvidaste tu contraseña?
						</a>
					</div>
					<div className="buttons d-flex justify-content-between m-2">
						<button type="button" className="btn btn-primary fortnite">
							Ingresar
						</button>
						<Link to="/signin">
							<button type="button" className="btn btn-primary fortnite">
								Registrarse
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginContainer;
