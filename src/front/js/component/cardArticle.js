import React from "react";

const CardArticle = () => {
	return (
		//style={{ maxWidth: "540px" }}
		<div className="card mb-3 mx-auto">
			<div className="row g-0">
				<div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
					<img
						src="https://via.placeholder.com/300"
						className="img-fluid rounded-start"
						alt="imagen articulo"
					/>
					<div className="d-flex ">
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="card-body">
						<div>
							<h1 className="card-title mb-5">Smartwatch T-Rex</h1>
							<hr />
							<div className="card-text d-flex justify-content-between align-items-center">
								<h2>$1232</h2>
								<select className="w-25">
									<option>Seleccionar color</option>
									<option>Rojo</option>
								</select>
							</div>
							<hr />
							<small className="card-text text-secondary">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industrys standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries, but also the leap into electronic typesetting, remaining
								essentially unchanged. It was popularised in the 1960s with the release of Letraset
								sheets containing Lorem Ipsum passages, and more recently with desktop publishing
								software like Aldus PageMaker including versions of Lorem Ipsum.
								{/* <small className="text-muted">Last updated 3 mins ago</small> */}
							</small>
							<hr />
							<button type="button" className="btn btn-primary">
								Agregar al carrito
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardArticle;
