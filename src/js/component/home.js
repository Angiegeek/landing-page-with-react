import React from "react";

//include images into your bundle
import { Jumbotron } from "./jumboTron";
import { Navbar } from "./navBar";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
