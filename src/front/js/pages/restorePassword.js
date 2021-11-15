import React, { useState } from "react";
import { Link } from "react-router-dom";

const RestorePassword = () => {
	const [password, setPassword] = useState();
	const [password2, setPassword2] = useState();
	const [token, setToken] = useState();
	return (
		<div id="contenedor" className="container">
			<div className="row">
				<div id="left" className="col-md-6 col-sm-6 left-side d-flex align-items-center">
					<div id="text" className="d-flex flex-column align-items-center text-white">
						<img
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
							style={{ width: "60%" }}
						/>
						<small>You want it, you got it!</small>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 right-side d-flex flex-column justify-content-between">
					<div id="titulo" className="title text-center">
						<h1>Restaurar contraseña</h1>
						<div className="alert alert-info" role="alert">
							<small>Por favor introduzca su nueva contraseña.</small>
						</div>
					</div>
					<form>
						<div className="inputs m-2 p-4 pt-1">
							<div className="input-group flex-nowrap">
								<span className="input-group-text text-center" id="addon-wrapping">
									<i className="fas fa-key" />
								</span>
								<input
									type="password"
									className="form-control"
									value={password}
									placeholder="nueva contraseña"
									aria-label="password"
									aria-describedby="addon-wrapping"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="input-group flex-nowrap">
								<span className="input-group-text text-center" id="addon-wrapping">
									{/* <i className="fas fa-at" /> */}
									<i className="fas fa-key" />
								</span>
								<input
									type="password"
									className="form-control"
									value={password2}
									placeholder="confirma contraseña"
									aria-label="password"
									aria-describedby="addon-wrapping"
									onChange={e => setPassword2(e.target.value)}
								/>
							</div>
							<div className="input-group flex-nowrap">
								<span className="input-group-text text-center" id="addon-wrapping">
									<i className="fab fa-500px" />
								</span>
								<input
									type="text"
									className="form-control"
									value={token}
									placeholder="token"
									aria-label="token"
									aria-describedby="addon-wrapping"
									onChange={e => setToken(e.target.value)}
								/>
							</div>
						</div>

						<div className="buttons d-flex justify-content-between m-2">
							<button type="submit" className="btn btn-primary">
								Confirmar
							</button>
							<Link to="/login">
								<button type="submit" className="btn btn-primary">
									Volver
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RestorePassword;
