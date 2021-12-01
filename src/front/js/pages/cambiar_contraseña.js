import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CambiarContraseña = () => {
	const { store, actions } = useContext(Context);
	const [password1, setPassword1] = useState();
	const [password2, setPassword2] = useState();
	const [token, setToken] = useState(localStorage.getItem("token"));

	const cambiar = () => {
		actions.restorePassword(password1, password2, token);
	};

	return (
		<>
			{store.auth ? (
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="w-75 mx-auto  p-3 rounded" id="changePassword">
								<h1 className="text-center text-white">Cambiar contraseña</h1>

								<div className="input-group flex-nowrap mb-2">
									<span className="input-group-text text-center" id="addon-wrapping" />
									<input
										type="password"
										className="form-control"
										value={password1}
										placeholder="nueva contraseña"
										aria-label="password"
										aria-describedby="addon-wrapping"
										onChange={e => setPassword1(e.target.value)}
									/>
								</div>
								<div className="input-group flex-nowrap">
									<span className="input-group-text text-center" id="addon-wrapping" />
									<input
										type="password"
										className="form-control"
										value={password2}
										placeholder="repetir contraseña"
										aria-label="password"
										aria-describedby="addon-wrapping"
										onChange={e => setPassword2(e.target.value)}
									/>
								</div>
								<div className="d-grid gap-2 col-6 mx-auto mt-2 kathy">
									<button className="btn btn-primary w-100" type="button" onClick={() => cambiar()}>
										Cambiar
									</button>
									<Link to="/">
										<button className="btn btn-primary w-100" type="button">
											Volver
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col">
							<div className="alert alert-danger" role="alert">
								Accesso denegado!
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CambiarContraseña;
