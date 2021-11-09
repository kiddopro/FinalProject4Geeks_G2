import React, { useContext, useState } from "react";
import Login from "./login";

import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Login />
		</div>
	);
};
