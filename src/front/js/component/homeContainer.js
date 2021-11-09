import React, { Component } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
export const HomeContainer = () => (
	<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
		<div className="carousel-indicators">
			<button
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide-to="0"
				className="active"
				aria-current="true"
				aria-label="Slide 1"
			/>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
		</div>
		<div className="carousel-inner row">
			<div className="carousel-item active imagenhome col-md-8">
				<img
					className=" w-100"
					src="https://res.cloudinary.com/silvinaas/image/upload/v1636416721/gtr2e_sffumc.jpg"
					alt="..."
				/>
				<div className="carousel-caption col-md-4">
					<h5 className="text-primary">First slide label</h5>
					<p className="text-primary">Some representative placeholder content for the first slide.</p>
				</div>
			</div>
			<div className="carousel-item imagenhome">
				<img
					src="https://res.cloudinary.com/silvinaas/image/upload/v1636418698/iphone12_rgqda1.jpg"
					className="d-block w-100"
					alt="..."
				/>
				<div className="carousel-caption d-none d-md-block">
					<h5 className="text-primary">Second slide label</h5>
					<p>Some representative placeholder content for the second slide.</p>
				</div>
			</div>
			<div className="carousel-item imagenhome">
				<img
					src="https://res.cloudinary.com/silvinaas/image/upload/v1636418700/xiaomimivacuum_ntuko0.jpg"
					className="d-block w-100"
					alt="..."
				/>
				<div className="carousel-caption d-none d-md-block">
					<h5>Third slide label</h5>
					<p>Some representative placeholder content for the third slide.</p>
				</div>
			</div>
		</div>
		<button
			className="carousel-control-prev"
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true" />
			<span className="visually-hidden">Previous</span>
		</button>
		<button
			className="carousel-control-next"
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true" />
			<span className="visually-hidden">Next</span>
		</button>
		<p>hola estoy probando</p>
	</div>
);
export default HomeContainer;
