import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;