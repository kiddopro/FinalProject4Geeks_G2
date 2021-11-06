import React, { useContext, useState } from "react";
import LoginContainer from "../component/loginContainer";

import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<LoginContainer />
		</div>
	);
};
