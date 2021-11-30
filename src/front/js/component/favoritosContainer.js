import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/favoritos.scss";

import { Context } from "../store/appContext";

export const FavoritosContainer = () => {
	const { store, actions } = useContext(Context);
	{
		// store.articulo.map((item, index) => {
		return (
			<div className="container">
				&nbsp;
				<h1 className="fortnite">
					Mis favoritos <i className="love fas fa-heart" />
				</h1>
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img src="..." className="img-fluid rounded-start" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<div className="container botonescarrito">
									<div className="justify-content-between d-flex align-items-center">
										<h5 className="card-title">nombre del producto aca</h5>
										<div>
											<button className="btn ">
												{/* onClick={() => actions.addToCart(item.nombre)} */}
												<i className="fas iconnav fa-shopping-cart" />
											</button>
											<button className="btn ">
												{/* onClick={() => actions.addToCart(item.nombre)} */}
												<i className="fas eliminar fa-times" />
											</button>
										</div>
									</div>
								</div>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
export default FavoritosContainer;
