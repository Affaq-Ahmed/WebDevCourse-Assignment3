import logo from "./logo.png";
import React, { useContext } from "react";
import "./Navbar.css";
import { AppContext, useGlobalContext } from "../context";

const Navbar = () => {
  const { openLogin, openSignup } = useGlobalContext();
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-transparent">
				<div className="container-fluid mt-2">
					<a className="navbar-brand blockquote" href="?">
						<img
							src={logo}
							className="App-logo"
							alt="logo"
							width="145px"
							height="36px"
						/>
					</a>

					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item d-sm-none d-md-block d-lg-block">
								<a
									className="nav-link active blockquote"
									aria-current="page"
									href="?"
								>
									How it works
								</a>
							</li>
							<li className="nav-item d-sm-none d-md-block d-lg-block">
								<a className="nav-link active blockquote" href="?">
									Browse Jobs
								</a>
							</li>
						</ul>

						<button
							type="button"
							className="btn btn-transparent"
							onClick={openLogin}
						>
							<p className="blockquote"> Log In</p>
						</button>
						<button
							type="button"
							className="btn btn-transparent"
							onClick={openSignup}
						>
							<p className="blockquote"> Sign Up</p>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
