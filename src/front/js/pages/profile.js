import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.auth ? (
				<div className="container bootstrap snippet">
					<div className="row">
						<div className="col-sm-10">
							<h1>User name</h1>
						</div>
						<div className="col-sm-2">
							<a href="/users" className="pull-right">
								{/* <img
							title="profile image"
							className="img-circle img-responsive"
							src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"
						/> */}
							</a>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<div className="text-center">
								{/* <img
							src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
							className="avatar img-circle img-thumbnail"
							alt="avatar"
						/> */}
								<img src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Prescription02&hatColor=PastelYellow&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=Overall&clotheColor=Gray02&eyeType=Close&eyebrowType=Default&mouthType=Twinkle&skinColor=Tanned" />
								<h6 className="mt-3">Upload a different photo...</h6>
								<input type="file" className="text-center center-block file-upload" />
							</div>

							{/* <div className="panel panel-default">
						<div className="panel-heading">
							Website <i className="fa fa-link fa-1x" />
						</div>
						<div className="panel-body">
							<a href="http://bootnipets.com">bootnipets.com</a>
						</div>
					</div> */}

							<ul className="list-group my-4">
								<li className="list-group-item text-muted">
									Actividad <i className="fa fa-dashboard fa-1x" />
								</li>
								<li className="list-group-item text-right">
									<span className="pull-left">
										<strong>Vendidos</strong>
									</span>{" "}
									125
								</li>
								<li className="list-group-item text-right">
									<span className="pull-left">
										<strong>Comentarios</strong>
									</span>{" "}
									13
								</li>
								<li className="list-group-item text-right">
									<span className="pull-left">
										<strong>Comprados</strong>
									</span>{" "}
									37
								</li>
								<li className="list-group-item text-right">
									<span className="pull-left">
										<strong>Seguidores</strong>
									</span>{" "}
									78
								</li>
							</ul>

							{/* <div className="panel panel-default">
						<div className="panel-heading">Social Media</div>
						<div className="panel-body">
							<i className="fa fa-facebook fa-2x" /> <i className="fa fa-github fa-2x" />{" "}
							<i className="fa fa-twitter fa-2x" /> <i className="fa fa-pinterest fa-2x" />{" "}
							<i className="fa fa-google-plus fa-2x" />
						</div>
					</div> */}
						</div>
						<div className="col-sm-9">
							<ul className="nav nav-tabs">
								<li className="active" m-1>
									<a data-toggle="tab" href="#home" className="me-3">
										Home
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#messages" className="me-3">
										Compras
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#settings">
										Ventas
									</a>
								</li>
							</ul>

							<div className="tab-content">
								<div className="tab-pane active" id="home">
									<hr />
									<form className="form" action="##" method="post" id="registrationForm">
										<div className="form-group">
											<div className="col-xs-6">
												<label html="first_name">
													<h4>Nombre completo</h4>
												</label>
												<input
													type="text"
													className="form-control"
													name="first_name"
													id="first_name"
													title="enter your first name if any."
												/>
											</div>
										</div>
										{/* <div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="last_name">
											<h4>Last name</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="last_name"
											id="last_name"
											placeholder="last name"
											title="enter your last name if any."
										/>
									</div>
								</div> */}

										<div className="form-group">
											<div className="col-xs-6">
												<label html="phone">
													<h4>Teléfono</h4>
												</label>
												<input
													type="text"
													className="form-control"
													name="phone"
													id="phone"
													title="enter your phone number if any."
												/>
											</div>
										</div>

										{/* <div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="mobile">
											<h4>Mobile</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="mobile"
											id="mobile"
											placeholder="enter mobile number"
											title="enter your mobile number if any."
										/>
									</div>
								</div> */}
										<div className="form-group">
											<div className="col-xs-6">
												<label htmlFor="email">
													<h4>Email</h4>
												</label>
												<input
													type="email"
													className="form-control"
													name="email"
													id="email"
													title="enter your email."
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label htmlFor="email">
													<h4>Dirección</h4>
												</label>
												<input
													type="text"
													className="form-control"
													id="location"
													title="enter a location"
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label htmlFor="email">
													<h4>Documento</h4>
												</label>
												<input
													type="text"
													className="form-control"
													id="documento"
													title="ingrese su documento"
												/>
											</div>
										</div>
										{/* <div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="password">
											<h4>Password</h4>
										</label>
										<input
											type="password"
											className="form-control"
											name="password"
											id="password"
											placeholder="password"
											title="enter your password."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="password2">
											<h4>Verify</h4>
										</label>
										<input
											type="password"
											className="form-control"
											name="password2"
											id="password2"
											placeholder="password2"
											title="enter your password2."
										/>
									</div>
								</div> */}
										<div className="form-group">
											<div className="col-xs-12">
												<br />
												<button className="btn btn-lg btn-success" type="submit">
													<i className="glyphicon glyphicon-ok-sign" /> Save
												</button>
												<button className="btn btn-lg" type="reset">
													<i className="glyphicon glyphicon-repeat" /> Reset
												</button>
											</div>
										</div>
									</form>

									<hr />
								</div>
								<div className="tab-pane" id="messages">
									<hr />
									<form className="form" action="##" method="post" id="registrationForm">
										{/* <div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="first_name">
											<h4>First name</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="first_name"
											id="first_name"
											placeholder="first name"
											title="enter your first name if any."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="last_name">
											<h4>Last name</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="last_name"
											id="last_name"
											placeholder="last name"
											title="enter your last name if any."
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="phone">
											<h4>Phone</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="phone"
											id="phone"
											placeholder="enter phone"
											title="enter your phone number if any."
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="mobile">
											<h4>Mobile</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="mobile"
											id="mobile"
											placeholder="enter mobile number"
											title="enter your mobile number if any."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="email">
											<h4>Email</h4>
										</label>
										<input
											type="email"
											className="form-control"
											name="email"
											id="email"
											placeholder="you@email.com"
											title="enter your email."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="email">
											<h4>Location</h4>
										</label>
										<input
											type="email"
											className="form-control"
											id="location"
											placeholder="somewhere"
											title="enter a location"
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="password">
											<h4>Password</h4>
										</label>
										<input
											type="password"
											className="form-control"
											name="password"
											id="password"
											placeholder="password"
											title="enter your password."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="password2">
											<h4>Verify</h4>
										</label>
										<input
											type="password"
											className="form-control"
											name="password2"
											id="password2"
											placeholder="password2"
											title="enter your password2."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-12">
										<br />
										<button className="btn btn-lg btn-success" type="submit">
											<i className="glyphicon glyphicon-ok-sign" /> Save
										</button>
										<button className="btn btn-lg" type="reset">
											<i className="glyphicon glyphicon-repeat" /> Reset
										</button>
									</div>
								</div>*/}
										<h1 text-center text-info>
											Proximamente
										</h1>
									</form>
								</div>
								<div className="tab-pane" id="settings">
									<hr />
									<form className="form" action="##" method="post" id="registrationForm">
										{/*<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="first_name">
											<h4>First name</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="first_name"
											id="first_name"
											placeholder="first name"
											title="enter your first name if any."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="last_name">
											<h4>Last name</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="last_name"
											id="last_name"
											placeholder="last name"
											title="enter your last name if any."
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="phone">
											<h4>Phone</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="phone"
											id="phone"
											placeholder="enter phone"
											title="enter your phone number if any."
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="mobile">
											<h4>Mobile</h4>
										</label>
										<input
											type="text"
											className="form-control"
											name="mobile"
											id="mobile"
											placeholder="enter mobile number"
											title="enter your mobile number if any."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="email">
											<h4>Email</h4>
										</label>
										<input
											type="email"
											className="form-control"
											name="email"
											id="email"
											placeholder="you@email.com"
											title="enter your email."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="email">
											<h4>Location</h4>
										</label>
										<input
											type="email"
											className="form-control"
											id="location"
											placeholder="somewhere"
											title="enter a location"
										/>
									</div>
								</div>
								 <div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="password">
											<h4>Password</h4>
										</label>
										<input
											type="password"
											className="form-control"
											name="password"
											id="password"
											placeholder="password"
											title="enter your password."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label htmlFor="password2">
											<h4>Verify</h4>
										</label>
										<input
											type="password"
											className="form-control"
											name="password2"
											id="password2"
											placeholder="password2"
											title="enter your password2."
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-12">
										<br />
										<button className="btn btn-lg btn-success pull-right" type="submit">
											<i className="glyphicon glyphicon-ok-sign" /> Save
										</button>
										<button className="btn btn-lg" type="reset">
											<i className="glyphicon glyphicon-repeat" /> Reset
										</button>
									</div>
								</div>*/}
										<h1>Proximamente</h1>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="alert alert-danger text-center" role="alert">
					<h3>Acceso denegado!</h3>
					<h6>Debes estar logueado para ver tu perfil.</h6>
				</div>
			)}
		</>
	);
};

export default Profile;
