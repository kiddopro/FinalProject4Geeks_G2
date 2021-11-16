import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/loginContainer.scss";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const CarritoContainer = () => (
	<div className="accordion" id="accordionExample">
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingOne">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
					aria-expanded="true"
					aria-controls="collapseOne">
					Accordion Item #1
				</button>
			</h2>
			<div
				id="collapseOne"
				className="accordion-collapse collapse show"
				aria-labelledby="headingOne"
				data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<strong>Tblablabla.</strong> It is shown by default, until the collapse plugin adds the appropriate
					classNamees that we use to style each element. These classNamees control the overall appearance, as
					well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
					blabla
					<code>.accordion-body</code>, though the transition does limit overflow.
				</div>
			</div>
		</div>
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingTwo">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
					aria-expanded="false"
					aria-controls="collapseTwo">
					Accordion Item #2
				</button>
			</h2>
			<div
				id="collapseTwo"
				className="accordion-collapse collapse"
				aria-labelledby="headingTwo"
				data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<strong>blablabla.</strong> blablabla <code>.accordion-body</code>, though the transition does limit
					overflow.
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
					Accordion Item #3
				</button>
			</h2>
			<div
				id="collapseThree"
				className="accordion-collapse collapse"
				aria-labelledby="headingThree"
				data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<strong>Thblablabla.</strong> blablabla <code>.accordion-body</code>, though the transition does
					limit overflow.
				</div>
			</div>
		</div>
	</div>
);
export default CarritoContainer;
