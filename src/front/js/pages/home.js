import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import HomeContainer from "../component/homeContainer";

import "../../styles/home.scss";
import Login from "../pages/login";
import { Redirect } from "react-router-dom";

export const Home = () => {
	return <HomeContainer />;
};
export default Home;
