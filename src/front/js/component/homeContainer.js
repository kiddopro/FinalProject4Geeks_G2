import React, { Component } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
export const HomeContainer = () => (
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
			<div className="carousel-inner">
				<div className="carousel-item active imagenhome" data-bs-interval="5000">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636416721/gtr2e_sffumc.jpg"
						className="d-inline w-100"
						alt="..."
					/>

					<div className="carousel-caption d-none d-md-block textodos">
						<h5 className="fs-1 fst-italic titulo1">Llevá tu entrenamiento</h5>
						<p className="titulo2">A OTRO NIVEL</p>
						<button type="button" className="btn btn-outline-primary">
							Más información
						</button>
					</div>
				</div>
				<div className="carousel-item imagenhome" data-bs-interval="2000">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636418698/iphone12_rgqda1.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block textodos" data-bs-interval="2000">
						<h5 className="fs-1 fst-italic titulo1">La última tecnología</h5>
						<p className="titulo2">LA ENCONTRÁS ACÁ</p>
						<button type="button" className="btn btn-outline-primary">
							Más información
						</button>
					</div>
				</div>
				<div className="carousel-item imagenhome">
					<img
						src="https://res.cloudinary.com/silvinaas/image/upload/v1636418700/xiaomimivacuum_ntuko0.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block textodos">
						<h5 className="fs-1 fst-italic titulo1">Limpiar la casa</h5>
						<p className="titulo2">NUNCA FUE TAN FÁCIL</p>
						<button type="button" className="btn btn-outline-primary">
							Más información
						</button>
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
