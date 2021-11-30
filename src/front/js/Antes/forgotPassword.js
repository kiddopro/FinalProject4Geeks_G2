import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/loginContainer.scss";
import { Context } from "../store/appContext";

const ForgotPassword = () => {
	const [email, setEmail] = useState();
	const { store, actions } = useContext(Context);

	const forgotPassword = () => {
		console.log(email);
		actions.forgotPassword(email);
	};

	return (
		<div id="contenedor" className="container">
			<div className="row">
				<div id="left" className="col-md-6 col-sm-6 left-side d-flex align-items-center">
					<div id="text" className="d-flex flex-column align-items-center text-white">
						<img
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
							style={{ width: "60%" }}
						/>
						<small className="fortnite">You want it, you got it!</small>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 right-side d-flex flex-column justify-content-between">
					<div id="titulo" className="title text-center">
						<h1 className="fortnite sombra">Olvidé mi contraseña</h1>
						<div className="alert alert-info" role="alert">
							<small className="letra">
								Por favor introduzca su dirección de correo electrónico para recibir un enlace de
								restablecimiento de contraseña.
							</small>
						</div>
					</div>

					<div className="inputs m-2">
						<div className="input-group flex-nowrap p-4">
							<span className="input-group-text text-center" id="addon-wrapping">
								<i className="fas fa-at" />
							</span>
							<input
								type="email"
								className="form-control fortnite"
								value={email}
								placeholder="Email"
								aria-label="email"
								aria-describedby="addon-wrapping"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</div>

					<div className="buttons d-flex justify-content-between m-2">
						<button type="button" className="btn btn-primary letra" onClick={() => forgotPassword()}>
							Confirmar
						</button>
						<Link to="/login">
							<button type="submit" className="btn btn-primary letra">
								Volver
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
