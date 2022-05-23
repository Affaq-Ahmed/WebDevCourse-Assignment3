import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<Sidebar />
			<Footer />
		</div>
	);
}
