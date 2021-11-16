import React, { useState, useEffect, useContext } from "react";
import "../../styles/loginContainer.scss";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

const LoginContainer = () => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [auth, setAuth] = useState(false);

	const changeAuth = () => {
		actions.loginUser(email, password);
		setAuth(localStorage.getItem("token") ? true : false);
	};

	useEffect(
		() => {
			setAuth(localStorage.getItem("token") ? true : false);
		},
		[auth]
	);

	return auth ? (
		<Redirect to="/demo" />
	) : (
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
						<h1 className="fortnite">Ingresar</h1>
						{/* <img
							src="https://res.cloudinary.com/dmrzqrcpq/image/upload/v1635985840/logo_FINAL_tw0rfp.png"
							style={{ width: "50%" }}
						/> */}
					</div>
					<form onSubmit={e => onSubmit(e)}>
						<div className="inputs m-2">
							<div className="input-group flex-nowrap">
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
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
						</div>
						<div className="options d-flex justify-content-between m-2">
							<div>
								<input className="m-1 letra" type="checkbox" id="remember" value="remember" />
								<label htmlFor="remember" className="letra">
									Recordarme
								</label>{" "}
							</div>
							<div>
								<Link to="/forgot_password">
									<a href="#" className="letra">
										¿Olvidaste tu contraseña?
									</a>
								</Link>

								<h6 className="notienesusuario letra"> Aún no tienes usuario?</h6>
							</div>
						</div>
						<div className="buttons d-flex justify-content-between m-2">
							<button type="submit" className="btn btn-primary letra">
								Ingresar
							</button>

							<Link to="/signin">
								<button type="button" className="btn btn-primary letra">
									Registrate
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>

		// <form onSubmit={e => onSubmit(e)}>
		// 	<div className="mb-3">
		// 		<label htmlFor="exampleInputEmail" className="form-label">
		// 			email
		// 		</label>
		// 		<input
		// 			type="text"
		// 			className="form-control"
		// 			id="exampleInputEmail"
		// 			aria-describedby="emailHelp"
		// 			onChange={e => setEmail(e.target.value)}
		// 			value={email}
		// 		/>
		// 		<div id="emailHelp" className="form-text">
		// 			Well never share your email with anyone else.
		// 		</div>
		// 	</div>
		// 	<div className="mb-3">
		// 		<label htmlFor="exampleInputPassword" className="form-label">
		// 			password
		// 		</label>
		// 		<input
		// 			type="password"
		// 			className="form-control"
		// 			id="exampleInputPassword"
		// 			onChange={e => setPassword(e.target.value)}
		// 			value={password}
		// 		/>
		// 	</div>
		// 	<div className="mb-3 form-check">
		// 		<input type="checkbox" className="form-check-input" id="exampleCheck1" />
		// 		<label className="form-check-label" htmlFor="exampleCheck1">
		// 			Check me out
		// 		</label>
		// 	</div>
		// 	<button type="submit" className="btn btn-primary">
		// 		Submit
		// 	</button>
		// </form>
	);
};

export default LoginContainer;
