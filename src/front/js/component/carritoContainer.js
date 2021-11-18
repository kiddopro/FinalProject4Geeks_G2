import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/loginContainer.scss";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const CarritoContainer = () => (
	<div className="container carrito">
		<h1 className="fortnite">
			Mi carrito <i className="fas fa-shopping-cart" />
		</h1>
		<div className="container carritoadentro">
			&nbsp;
			<h4 className="letra">Productos</h4>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo">
							Producto 1
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>blablabla.</strong> blablabla <code>.accordion-body</code>, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree">
							Producto 2
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Thblablabla.</strong> blablabla <code>.accordion-body</code>, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
			</div>
			&nbsp;
			<h4 className="letra">Detalle de envío</h4>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
				<label className="form-check-label" htmlFor="flexRadioDefault1">
					Envío a domicilio
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault2"
					checked
				/>
				<label className="form-check-label" htmlFor="flexRadioDefault2">
					Retiro en Pick Up
				</label>
			</div>
			&nbsp;
			<h4 className="letra">Detalle de pago</h4>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="flexRadio2" id="flexRadioDefault1" />
				<label className="form-check-label" htmlFor="flexRadioDefault1">
					Envío a domicilio
				</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="flexRadio2" id="flexRadioDefault2" checked />
				<label className="form-check-label" htmlFor="flexRadioDefault2">
					Retiro en Pick Up
				</label>
			</div>
			&nbsp;
		</div>
	</div>
);
export default CarritoContainer;
