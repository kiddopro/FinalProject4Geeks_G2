import React, { Component } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
export const HomeContainer = () => (
	// <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
	// 	<div className="carousel-indicators">
	// 		<button
	// 			type="button"
	// 			data-bs-target="#carouselExampleCaptions"
	// 			data-bs-slide-to="0"
	// 			className="active"
	// 			aria-current="true"
	// 			aria-label="Slide 1"
	// 		/>
	// 		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
	// 		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
	// 	</div>
	// 	<div className="carousel-inner row">
	// 		<div className="carousel-item active imagenhome col-md-8">
	// 			<img
	// 				className=" w-100"
	// 				src="https://res.cloudinary.com/silvinaas/image/upload/v1636416721/gtr2e_sffumc.jpg"
	// 				alt="..."
	// 			/>
	// 			<div className="carousel-caption col-md-4">
	// 				<h5 className="text-primary">First slide label</h5>
	// 				<p className="text-primary">Some representative placeholder content for the first slide.</p>
	// 			</div>
	// 		</div>
	// 		<div className="carousel-item imagenhome">
	// 			<img
	// 				src="https://res.cloudinary.com/silvinaas/image/upload/v1636418698/iphone12_rgqda1.jpg"
	// 				className="d-block w-100"
	// 				alt="..."
	// 			/>
	// 			<div className="carousel-caption d-none d-md-block">
	// 				<h5 className="text-primary">Second slide label</h5>
	// 				<p>Some representative placeholder content for the second slide.</p>
	// 			</div>
	// 		</div>
	// 		<div className="carousel-item imagenhome">
	// 			<img
	// 				src="https://res.cloudinary.com/silvinaas/image/upload/v1636418700/xiaomimivacuum_ntuko0.jpg"
	// 				className="d-block w-100"
	// 				alt="..."
	// 			/>
	// 			<div className="carousel-caption d-none d-md-block">
	// 				<h5>Third slide label</h5>
	// 				<p>Some representative placeholder content for the third slide.</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	<button
	// 		className="carousel-control-prev"
	// 		type="button"
	// 		data-bs-target="#carouselExampleCaptions"
	// 		data-bs-slide="prev">
	// 		<span className="carousel-control-prev-icon" aria-hidden="true" />
	// 		<span className="visually-hidden">Previous</span>
	// 	</button>
	// 	<button
	// 		className="carousel-control-next"
	// 		type="button"
	// 		data-bs-target="#carouselExampleCaptions"
	// 		data-bs-slide="next">
	// 		<span className="carousel-control-next-icon" aria-hidden="true" />
	// 		<span className="visually-hidden">Next</span>
	// 	</button>
	// 	<p>hola estoy probando</p>
	// </div>
	<div>
		<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				/>
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" />
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" />
			</div>
			<div className="carousel-inner float-right">
				<div className="carousel-item active imagenhome" data-bs-interval="10000">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636416721/gtr2e_sffumc.jpg"
						className="d-block w-100"
						alt="..."
					/>

					<div className="carousel-caption d-md-block textouno">
						<h5>Llevá tu entrenamiento</h5>
						<p>A otro nivel</p>
					</div>
				</div>

				<div className="carousel-item imagenhome" data-bs-interval="2000">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636418698/iphone12_rgqda1.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
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
				data-bs-target="#carouselExampleDark"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>

		<h3 className="text-center">Smartwatches</h3>
		<br />
		<div className="row row-cols-1 row-cols-md-4 g-4">
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1635987514/tecno/HWTIAB09BK_01_aw7i85.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title"> Huawei Watch Fit</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636586918/tecno/APPLEWATCHSEWT_01_smwoaq.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Apple watch SE 40mm</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636586916/tecno/A1919CGN_02_pfnt86.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Amazfit T-Rex</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636586912/tecno/XIA1969GY_01_yemcdn.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Amazfit GTS 2 48,5mm</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
		</div>
		<br />
		<h3 className="text-center">Celulares</h3>
		<br />
		<div className="row row-cols-1 row-cols-md-4 g-4">
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636587648/tecno/cats52_sikdve.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Cat S52</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636587650/tecno/IP12PBK_01_ftfr2k.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Apple Iphone 12 Pro</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636587646/tecno/XIARN10PGY_01_kkzvnh.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Xiaomi Redmi Note 10 Pro</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636587652/tecno/SSAMA225MWT_03_kjsinr.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Samsung Galaxy A22</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
		</div>

		<br />
		<h3 className="text-center">Accesorios</h3>
		<br />
		<div className="row row-cols-1 row-cols-md-4 g-4">
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636590114/tecno/MOTOBUDS100BK_01_rsdry2.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Auriculares Motorola Ipx5</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636590472/tecno/TYWSP70L_01_cjpwqt.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Parlante Toshiba P70</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636590701/tecno/841667135809_01_POS_zzetry.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Tablet Amazon Fire 7</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636586509/tecno/CHDHZ202MAX360_04_xirzjr.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">GoPro Max</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<button type="button" className="btn btn-outline-primary">
							Ver más
						</button>
						&nbsp;
						<button type="button" className="btn btn-outline-primary">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
		</div>
		<br />
	</div>
);
export default HomeContainer;
